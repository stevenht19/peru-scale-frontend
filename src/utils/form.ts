export const getRequiredRule = (fieldName?: string) => {
  return [
    {
      required: true,
      message: fieldName ? `${fieldName} es obligatorio` : 'Campo obligatorio'
    }
  ]
}