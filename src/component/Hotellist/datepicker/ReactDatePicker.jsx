import React, { useEffect, useState, createContext, useContext } from 'react';
import DatePicker from 'react-datepicker';
import './datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from 'react-bootstrap';

export const CounterContext = createContext(null);

// export const CounterProvider = (props) => {
//     return (

//     )
// }

export default function ReactDatePicker({ childern, onDateChange, list, ...props }) {

    const [dateRange, setDateRange] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const maxdate3 = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
    const [endDate, setEndDate] = useState(new Date(maxdate3));



    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start)
        setEndDate(end);
        // onDateChange(start,end)
    }
    const maxdate2 = new Date().getTime() + 60 * 24 * 60 * 60 * 1000;

    useEffect(() => {
        // update the state herer 
        if (startDate && endDate) {
            setDateRange(`Selected date range: ${startDate.toISOString().slice(0, 10)} - ${endDate.toISOString().slice(0, 10)}`);
        } else if (startDate) {
            setDateRange(`Selected start date: ${startDate.toISOString().slice(0, 10)}`);
        } else {
            setDateRange("");
        }
    }, [startDate, endDate]);



    const addingdates = () => {
        if (startDate && endDate) {
            console.log(startDate, endDate);
            list();
            // console.log(calling())
        }
    }


    return (
        // <>
        <CounterContext.Provider value={{ startDate, endDate }}>
            {/* {childern} */}
            {props.children}
            <Container fluid="sm">
                <div className='d-flex date-content'>
                    <DatePicker
                        // selected={new Date()}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        dateFormat="yyyy/MM/dd"
                        minDate={new Date()}
                        maxDate={maxdate2}
                        monthsShown={2}
                    />
                    <p>{dateRange}</p>
                    <div className="search-btn">
                        <button onClick={addingdates}>Search</button>
                    </div>
                </div>
                {endDate ? ("") : ("select end date")}
            </Container>
        </CounterContext.Provider>
    )
}
