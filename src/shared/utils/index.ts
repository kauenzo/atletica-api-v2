/**
 * Utilitário para remover campos sensíveis de objetos
 */
export function excludeSensitiveFields<T, K extends keyof T>(
  entity: T,
  fields: K[],
): Omit<T, K> {
  const result = { ...entity }
  fields.forEach((field) => delete result[field])
  return result
}

/**
 * Utilitário para paginar resultados
 */
export interface PaginationOptions {
  page: number
  limit: number
}

export interface PaginatedResult<T> {
  data: T[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export function paginate<T>(
  data: T[],
  count: number,
  options: PaginationOptions,
): PaginatedResult<T> {
  const { page, limit } = options
  const totalPages = Math.ceil(count / limit)

  return {
    data,
    meta: {
      total: count,
      page,
      limit,
      totalPages,
    },
  }
}
