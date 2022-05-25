import React from 'react'

export default function Form({children,formClass, ...rest}) {
  return (
    <form className={formClass} {...rest}>
        {children}
    </form>
  )
}
