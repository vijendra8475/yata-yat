import React from 'react'

const LocationSearchPanel = ( props ) => {


    const addresses = [
        "24B, Near Kapoor's Cafe Sheryians Coding School Bhopal",
        "15A, MP Nagar Zone 1, Bhopal",
        "45C, Arera Colony, Bhopal",
        "78D, New Market, Bhopal",
        "33E, Bittan Market, Bhopal",
        "92F, 10 Number Market, Bhopal",
        "56G, BHEL Township, Bhopal",
        "67H, Kolar Road, Bhopal",
        "89I, Shahpura, Bhopal",
        "12J, TT Nagar, Bhopal"
    ];


  return (
        <div className='w-full h-full'>
            {
                addresses.map((address, idx) =>{
                    return(
                        <div onClick={() => props.setVehiclePanel(true)} key={idx} className='flex items-center justify-start py-2 my-4 px-10 w-full bg-gray-100 rounded-2xl gap-4'>
                            <h2 className='h-12 w-12 flex items-center justify-center text-2xl bg-gray-200 rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
                            <h4 className='font-semibold text-xl'>{address}</h4>
                        </div>
                    )
                })
            }
            
        </div>

  )
}

export default LocationSearchPanel