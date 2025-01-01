import React from 'react'

const LocationSearchPanel = ( props ) => {

    const  { suggestions, setRandom, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField } = props;

    const handleSuggestionClick = (suggestion) => {
        // console.log('hello');
        
        if (activeField === 'pickup') {
            setPickup(suggestion)            
        } else if (activeField === 'destination') {
            setDestination(suggestion)
            setRandom(Math.random());
            props.setVehiclePanel(true)
        }
    }

    // console.log(suggestions);
    


  return (
        <div className='w-full h-full'>
            {
                suggestions.map((ele,idx) => {
                    return (
                        <div onClick={() => {
                            handleSuggestionClick(ele.description);
                        }} key={idx} className='flex items-center justify-start py-2 my-4 px-10 w-full bg-gray-100 rounded-2xl gap-4'>
                            <h2 className='h-12 w-12 flex items-center justify-center text-2xl bg-gray-200 rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
                            <h4 className='font-semibold text-xl'>{ele.description}</h4>
                        </div>
                    )
                })
            }
            
        </div>

  )
}

export default LocationSearchPanel