---
title: How to use Riverpod 2.0 + Generator in your Flutter Project
date: 2023-01-25
---

Riverpod is the new standard for state management and reactive data caching in Flutter. The second version, _Riverpod 2.0,_ has been out for a while yet it's fairly hard to understand its concepts and the new ways of managing data in your app.

## What we will learn

- How to update existing providers with Riverpod 2.0’s new providers.
- How to manage state the _new_ way inside of your app.
- How to work with futures in Riverpod 2.0.
- How to auto generate providers and streamline the provider creation process.

Before getting started, we have to go over the things that Riverpod is capable of. Riverpod uses something called providers to manage state and the following are the providers that existed before 2.0.

- `Provider`: This provider creates a value. Not optimal for most use cases as it does not have any kind of reactive state or memory, however, it’s useful if you have a class with many static methods or a dependency that you want to access.
- `ChangeNotifierProvider`, `StateNotifierProvider`, `StateProvider`: These all help with creating, accessing, and caching local state inside of your app. They all support reactive changes.
- `FutureProvider`, `StreamProvider`: These help with caching Asynchronous data in your app.

With Riverpod 2.0, we have 2 providers that replace all of these…All but one.

- `NotifierProvider`: This is used for local changes replacing `ChangeNotifierProvider`, `StateNotifierProvider`, `StateProvider`.
- `AsyncNotifier`: This is used for Async changes replacing `FutureProvider`. _As of January 24th, 2023, there is no alternative for StreamProvider._

As I mentioned before we will also be using the generator to create our providers for us. The generator supports the new syntax for providers (_except StreamProviders)_. It also supports `AutoDisposeProviders`. It uses the `@riverpod` annotation to notify the generator to make the following a function a provider.

Now that we are familiar with the new providers, let’s see how we can use them in our app, with the generator.

## Getting Started

First things first, let’s install the Riverpod 2.0 package in our app. In your pubspec.yaml file add the following lines.

```yaml
# pubspec.yaml

environment:
  sdk: '>=2.17.0 <3.0.0'
  flutter: '>=3.0.0'

dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.1.3
  riverpod_annotation: ^1.1.1

dev_dependencies:
  build_runner:
  riverpod_generator: ^1.1.1
```

## Creating a HelloWorld Provider

Now for the most basic style of a provider, the following snippet shows how to create and consume it.

```dart
// main.dart

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

// The generator will generate a file that contains a provider. You typically
// want this to follow the syntax: "<filename>.g.dart". You also want to keep this
// after your import statements as a good practice.
part 'main.g.dart';

// We simply create a method and annotate it with "@riverpod"
// to create our provider. Notice how we created the "HelloWorldRef" object.
// This doesn't exist yet but after we run the command "dart run build_runner watch"
// in our terminal it will be generated.
@riverpod
String helloWorld(HelloWorldRef ref) {
  return 'Hello world';
}

// To consumer our provider we use it in the same fashion we would use
// any synchronous provider.
void main() {
  runApp(
    // The state of all your providers in your app will be stored
    // inside of ProviderScope. You need this in order to read your
    // providers.
    ProviderScope(
      child: MyApp(),
    ),
  );
}

// Riverpod gives us access to a new classes called ConsumerWidget and
// ConsumerStatefulWidget which resemble Stateless and StatefulWidgets.

class MyApp extends ConsumerWidget {
  // Notice how the ConsumerWidget's build method takes in a
  // WidgetRef object. WidgetRef's are used to read your providers.
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // There are 2 ways of reading your provider.
    // For accessing a value and watching changes use ref.watch(...) and
    // for calling a function use ref.read(...).
    final String val = ref.watch(helloWorldProvider);

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Hello World Example')),
        body: Center(
          child: Text(val),
        ),
      ),
    );
  }
}
```

- The generator will generate a file that contains a provider. You typically want this to follow the syntax: `<filename>.g.dart` . You also want to keep this after your import statements as a good practice. The `part` let's dart know that the files are of relation to each other.
- To create a provider we simply create a method and annotate it with "@riverpod" to create our provider. Notice how we created the "HelloWorldRef" object. This doesn't exist yet but after we run the command `dart run build_runner watch` in our terminal it will be generated. It will create a file called `<filename>.g.dart` and clear up the errors that were made on creation. The file looks like this:

```dart
// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'main.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

// ignore_for_file: avoid_private_typedef_functions, non_constant_identifier_names, subtype_of_sealed_class, invalid_use_of_internal_member, unused_element, constant_identifier_names, unnecessary_raw_strings, library_private_types_in_public_api

/// Copied from Dart SDK
class _SystemHash {
  _SystemHash._();

  static int combine(int hash, int value) {
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + value);
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
    return hash ^ (hash >> 6);
  }

  static int finish(int hash) {
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + ((0x03ffffff & hash) << 3));
    // ignore: parameter_assignments
    hash = hash ^ (hash >> 11);
    return 0x1fffffff & (hash + ((0x00003fff & hash) << 15));
  }
}

String $helloWorldHash() => r'8bbe6cff2b7b1f4e1f7be3d1820da793259f7bfc';

/// See also [helloWorld].
final helloWorldProvider = AutoDisposeProvider<String>(
  helloWorld,
  name: r'helloWorldProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : $helloWorldHash,
);
typedef HelloWorldRef = AutoDisposeProviderRef<String>;

```

- Notice how the provider generated is an AutoDisposeProvider. This is because it resembles data with no state.
- Also note that after saving a file, so long as you have `dart run build_runner watch` running, it will regenerate all your generated providers.

## Accessing a provider anywhere in the widget tree

Now you might be wondering if it’s possible to read your provider’s data anywhere inside of your app. This is called _consuming_ your provider, and to do this you must use a `WidgetRef` object to call the `ref.watch(…)` method mentioned before. If only a specific portion of your widget needs to access the provider, you can use the `Consumer` class.

Here is an example with using the `Consumer` class.

```dart
// main.dart

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'main.g.dart';

@riverpod
String helloWorld(HelloWorldRef ref) {
  return 'Hello world';
}

void main() {
  runApp(
    ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Hello World Example')),
        body: Center(
          child: Consumer(
            builder: (context, ref, child) {
              final String val = ref.watch(helloWorldProvider);

              // Consumer has a return type of Widget.
              // Almost like using a Builder widget, but Riverpodified :)
              return Text(val);
            },
        ),
      ),
    );
  }
}
```

## Adding reactive state to a variable

Let’s take a look at some more complex provider examples like using classes. This can be good if you have a variable that needs reactive state like a checkbox boolean or a list of elements.

The following example shows how to use a class as a repository for your variable and turn it into a provider.

```dart
@riverpod
class HelloWorld extends _$HelloWorld {
  String build() {
    return "hello world";
  }

  void toCamelCase() {
    // Notice how we use the variable state to access the current
    // state of this provider.
    state = '${state[0].toUpperCase()}${state.substring(1).toLowerCase()}';
  }
}

ref.watch(helloWorldProvider); // hello world

ref.watch(helloWorldProvider.notifier).toCamelCase();

ref.watch(helloWorldProvider); // Hello World
```

In this example, our class extends `_$<Classname>` and has the riverpod annotation above to let riverpod know that this class should be turned into a provider. _Note: every provider made of a class **requires** a `build()` method_. This is where the initial state of your provider will be built.

Consuming your provider is as simple as the previously mentioned examples: simply call `ref.watch(<Generated Provider Name>)` and your app will watch for changes. And to use the class’ accessor methods, you must call

`ref.watch(<Generated Provider Name>.notifier).<Method Name>()` . make sure to include the `.notifier` .

## Changing the current value of a provider

Now to change the current value inside of the provider, you will need to use a constructor in your class and modify it slightly. Let’s take a look at a list of favorite words.

```dart
@riverpod
class FavoriteWordsRepository extends _$FavoriteWordsRepository {
  FavoriteWordsRepository(List<String> favoriteWords) {
    words = favoriteWords;
  }

  List<String> words = [];

  @override
  List<String> build() {
    return words;
  }
}
```

You may get an error inside of your generated main.g.dart file saying that you can’y use `FavoriteWordsRepository.new` . To fix this simple replace this with the following:

```dart
final favoriteWordsRepositoryProvider =
    AutoDisposeAsyncNotifierProvider<FavoriteWordsRepository, List<String>>(
  () => FavoriteWordsRepository([]), // FavoriteWordsRepository.new --> () => FavoriteWordsRepository([])
```

Don’t mix this up with initializing a list with a value, as it’s just a starting point and your actually initialized list is `List<String> words = [];`.

And then inside of your widget code you can update the state of the provider as follows:

```dart
ref.watch(favoriteWordsRepositoryProvider.notifier).words = ['Cars', 'Dogs', 'Flutter'];
```

## Creating an Asynchronous Provider

Now that we are familiar with working with local provider data, let’s work with futures! The following example shows how to create a basic future provider.

```dart
@riverpod
Future<String> helloWorldFuture(HelloWorldFutureRef ref) async {
  try {
    await Future.delayed(const Duration(seconds: 3));
    return 'Hello World';
  } catch (e) {
    // This function cannot invoke an error by the way.
    // Try/Catch blocks are a good practice for futures :)
    rethrow;
  }
}
```

Note that our function again has to take in a `HelloWorldFutureRef` . This is used to use multiple providers in a single provider. Here is an example using `dio: ^4.0.6` to make a http request to an example API:

```dart
// dio_provider.dart

import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'dio_provider.g.dart';

@riverpod
Dio dio(DioRef ref, {Map<String, dynamic>? headers, String? subDomain}) {
  return Dio(BaseOptions(baseUrl: 'https://api.example.com', headers: headers));
}
```

And then to access it in our provider:

```dart
// greeting_service.dart

import 'dio_provider.dart';

@riverpod
Future<String> getGreeting(GetGreetingRef ref, {required String name}) async {
  try {
    final response = await ref.watch(dioProvider()).get('/greeting');

    final result = response.data;
    final greeting = result + ', ' + name;

    return greeting; // Hello there, Carlton
  } catch (e) {
    rethrow;
  }
}
```

Using another provider in a provider makes the provider a `.family` .

## Passing arguments into the build method

Riverpod gives us the ability to pass in arguments to the build method on initialization. Let’s see how we can do this in our code.

```dart
@riverpod
class MyRepository extends _$MyRepository {
  @override
  // Add your positional arguments here. They can be named too.
  Future<String> build(String id, {bool value}) async {
    final String result = await myFuture(id, value);
    return anotherFutureThatReturnsAString(result);
  }

  // ...
}
```

## Consuming an AsyncProvider

Consuming an AsyncProvider is different from consuming a local provider and changes the way you interact with the data. Pay attention, this one’s a lot!

To consume a provider in your UI, you must use the `.when()` syntax. This syntax contains 3 different states: data (completed), loading, error. You can replace your FutureBuilders with this as it removes the hassle of checking for `ConnectionState` and returning said widget. Let's look at a full fledged app example:

**Creating initial app**

```dart
// main.dart

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const ProviderScope(
      child: MaterialApp(
        home: MyHomePage(),
      ),
    );
  }
}
```

**Creating foo class and provider**

```dart
// foo.dart

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'foo.g.dart';

class Foo {
  final int bar;
  int? baz;

  Foo(
    this.bar, {
    this.baz,
  });
}

@riverpod
class FooController extends _$FooController {
  FooController(this.foo);

  Foo foo;

  @override
  FutureOr<Foo> build() async {
    foo = await getFoo();
    return foo;
  }

  Future<Foo> getFoo() async {
    await Future.delayed(const Duration(seconds: 1));
    return Foo(1);
  }
}
```

**Consuming foo provider**

```dart
// home.dart

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Consumer(
        builder: (context, ref, _) {
          // Get the provider and watch it
          final fooAsync = ref.watch(fooControllerProvider);

          // Use .when to render UI from future
          return fooAsync.when(
            data: (foo) => Text('bar: ${foo.bar}, baz: ${foo.baz}'),
            loading: () => const CircularProgressIndicator(),
            error: (err, stack) => Text(err.toString()),
          );
        },
      ),
    );
  }
}
```

As we can see in this example we are using the `Consumer` widget to access `ref` so we are able to call `ref.watch(fooControllerProvider)` which returns the type `AsyncData` . We can then use the properties provided by the `.when(…)` function to layout our UI in a very clean and manageable format.

This will also require you to set the initial value of the provider in the generated file.

```dart
final fooControllerProvider = AutoDisposeAsyncNotifierProvider<FooController, Foo>(
  () => FooController(Foo(1)), // FooController.new --> FooController(Foo(1))
  name: r'fooControllerProvider',
  debugGetCreateSourceHash: const bool.fromEnvironment('dart.vm.product') ? null : $FooControllerHash,
);
```

## How to get current state of AsyncProvider as if it were an object/manipulatable data

The current method is good for quickly accessing API data but it does pose a problem: How do we access the data inside of a future provider as it were manipulateable data? Say we wanted to request User data from an API, but later on in the User settings, we would like to update the User’s name. We can’t necessarily do this because `ref.watch(<YourFutureProvider>)` returns the type `AsyncData` not a `User` class. We don't want to complete a `GET` request every time we want to know a piece of data, especially if it has loaded the first time and is at our disposal. One would think to make 2 providers, one `AsyncProvider` , one `NotifierProvider` to talk to each but that is inefficient. Luckily there is a way to do this.

The following code shows how to consume your `AsyncProvider` and use the data that it has loaded as it were a `NotifierProvider`.

```dart
// home.dart

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Consumer(
        builder: (context, ref, _) {
          // Get Foo provider and set the state of it.
          // Use it as if it were a State Provider.
          ref.watch(fooControllerProvider.notifier).foo = Foo(3);

          // Use Foo in UI (.requireValue is used to be able to listen to changes)
          final foo = ref.watch(fooControllerProvider).requireValue;
          // Use .when to render UI from future
          return Text('bar: ${foo.bar}, baz: ${foo.baz}');
        },
      ),
    );
  }
}
```

## Conclusion

Riverpod is the most recommended method of state management in Flutter and has emerged into a full-blown reactive state framework.

It’s important to learn it as other packages such as Provider will _eventually_ not be maintained anymore (But this is far in the future of course). Riverpod also gives you the most flexibility and control in managing state thanks to its brand new generator, making it extremely easy to create powerful and memory aware providers with `build_runner` .

Huge shout-outs 🎉 to the following. They have created some awesome resources that helped in the process of making this article:

- [CodeWithAndrea](https://github.com/bizz84)
- [Adnanjpg](https://github.com/adnanjpg)
- [rrouselgit](https://github.com/rrousselGit)

I hope this article was of use to you. If it was, feel free to read my other articles too with more tutorials, experiences, and guides!

In God we trust 🙏🏾
