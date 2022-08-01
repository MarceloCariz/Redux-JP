import React from 'react'

export const NuevoProducto = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb=4 font-weight-bold'>Agregar Nuevo Producto</h2>
            <form action="">
                <div className='form-group'>
                    <label htmlFor="">Nombre Producto</label>
                    <input type="text" className='form-control' placeholder='Nombre Producto' />
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
