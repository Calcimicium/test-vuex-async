export default interface Result<T> {
	count?: number
	page?: number
	pageSize?: number
	products?: T[]
	skip?: number
}
