import React, { useState } from 'react'

export const MainPage = () => {
    const [selectedCoffee, setSelectedCoffee] = useState()

    function handelClick(e) {
        setSelectedCoffee(() => {
            return e.target.id

        })
        console.log(selectedCoffee)

    }
    const coffeeName = ["americano", "au_lait", "capuccino", "corretto", "espresso", "latte", "lungo", "macchiato", "mocha", "ristretto"]


    return (
        <div className="main">

<div className="title">
<h1>👋 What's The Cofee Like?</h1>
</div>

            <div className="options ">
                {coffeeName.map((data, index) => {
                    return <div key={index} className="card" tabIndex="1" onClick={handelClick} id={data}>
                        {data.toUpperCase()}
                    </div>
                })}




            </div>
            <div clas="main-container">

                <div className="container">


                    <h1 className="coffee_name  ">{selectedCoffee ? selectedCoffee.toUpperCase() : "Choose your coffee"}</h1>
                    <div className="cup">
                        <div className={`filling  reset ${selectedCoffee}`}>
                            <div className="coffee">Coffee</div>
                            <div className="water ">Water</div>
                            <div className="liquor ">Liquor</div>
                            <div className="milk">Milk</div>
                            <div className="whipped_cream">Whipped cream</div>
                            <div className="milk_foam">Milk foam</div>
                            <div className="steamed_milk">Steamed milk</div>
                            <div className="chocolate">Chocolate</div>
                        </div>
                        <div className="plate"></div>
                    </div>
                </div>
            </div>
            <div className="title" >
                Created With ❤ By  <a href="https://www.instagram.com/vipansh_thakur/">Vipansh</a> 
            </div>
        </div>
    )
}
