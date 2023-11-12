"use-client"
interface InputProps {
  type: string
  placeholder: string
  labelCss?: string
  cssProps?: string
  children?: any
  focus?: boolean
}
export const Input = ({ type = "text", placeholder = "이름을 입력해주세요.", labelCss, cssProps, children, focus = false }: InputProps) => {
  return (
    <label className={`w-full flex justify-start ${labelCss}`}>
      <input
        type={type}
        placeholder={placeholder}
        autoFocus={focus}
        className={`px-[15px] py-[8px] rounded-md shadow-sm shadow-gray-400 !border border-[#efefef] border-solid ${cssProps}`}
      />
      {children}
    </label>
  )
}