import { useContext } from "react"
import { AuthContextType } from "../../config/types/authTypes"
import { AuthContext } from "../../context/AuthContext"

export const useAuth = ():AuthContextType => {
    const context = useContext(AuthContext)
    if ( context === undefined ){
        throw new Error('useauth must be used')
    }
  return context
}
