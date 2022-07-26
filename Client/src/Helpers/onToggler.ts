import {useState} from "react"

export default function useToggler(defaultOnValue: boolean = false) {
    const [isToggledOn, setIsToggledOn] = useState<boolean>(defaultOnValue)
    
    function toggle() {
        setIsToggledOn(prev => !prev)
    }
    
    return [isToggledOn, toggle]
}
