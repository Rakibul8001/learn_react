import React from 'react'

export default function Form({children,formClass, ...rest}) {
  return (
    <form className={formClass} action="#" {...rest}>
        {children}
    </form>
  )
}
