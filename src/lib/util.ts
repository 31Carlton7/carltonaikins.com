/**
 * Paginates an array of data.
 *
 * @param {any[]} data
 * @param {{ page?: number, limit: number }} args
 * @returns
 */

export function paginate(
	data: any[],
	{ page = 1, limit = 10 }: { page?: number; limit?: number } = {}
) {
	if (limit) {
		return data.slice((page - 1) * limit, page * limit);
	}

	return data;
}
