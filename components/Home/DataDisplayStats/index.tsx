import React from 'react'

export default function DataDisplayStats() {
  return (
    <div className="mx-4 max-w-full py-6 sm:mx-auto sm:px-6 lg:px-8">
      <div className="sm:flex sm:space-x-4">
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bg-indigo-100 text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-indigo-100 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm font-medium leading-6 text-gray-400">
                  Languages
                </h3>
                <p className="text-3xl font-bold text-black">2 (EN, PT)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bg-indigo-100 text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-indigo-100 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm font-medium leading-6 text-gray-400">
                  Catalog size
                </h3>
                <p className="text-3xl font-bold text-black">25 itens</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-100text-left mb-4 inline-block w-full transform overflow-hidden rounded-lg align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-indigo-100 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm font-medium leading-6 text-gray-400">
                  Request per month
                </h3>
                <p className="text-3xl font-bold text-black">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
