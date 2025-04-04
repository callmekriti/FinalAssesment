import React from 'react'



const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModel: false,
    setShowEventModel: (show) => {},
    
    dispatchCalEvent: ({type, payload}) => {},
    savedEvents: [],
    
    selectedEvent: null,
    setSelectedEvent: () => {},
    
    
})

export default GlobalContext
