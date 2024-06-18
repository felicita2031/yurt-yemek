import { useState,useEffect } from 'react'
import Card from '../card/Card'
const Main = ({ showToday, showTomorrow, showThisMonth }) => {

    useEffect(()=>{
        console.log("Main Componenti Mouth oldu")
    
        return()=>{
          console.log("Main Componenti Unmouth oldu")
        }
      },[])
    
      useEffect(()=>{
        console.log("Main Componenti Render oldu")
      })

    
    
    return (
        <div>
            {showToday && (<Card />)}

            {showTomorrow && (
                <Card />

            )}

            {showThisMonth && (
                <Card />
            )}
        </div>
    )
}
export default Main