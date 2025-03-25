import './App.css';
import BookingPage from './BookingPage';
import Main from './Main';
import Menu from './Menu';
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from './Layout';
import AboutUs from './AboutUs';
import { useReducer, useEffect, useState } from "react";
import ConfirmedBooking from './ConfirmedBooking';

function App() {
    const [fetchAPI, setFetchAPI] = useState(null);
    const [submitAPI, setSubmitAPI] = useState(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
            .then(response => response.text())
            .then(scriptContent => {
              try {
                let extractedFetchAPI, extractedSubmitAPI;

                // Create a wrapper to extract the functions
                const scriptWrapper = `(function() {
                    ${scriptContent}
                    return { fetchAPI, submitAPI };
                })()`;

                // Execute and extract functions
                const extractedFunctions = eval(scriptWrapper);
                extractedFetchAPI = extractedFunctions.fetchAPI;
                extractedSubmitAPI = extractedFunctions.submitAPI;

                // Set state if functions exist
                if (typeof extractedFetchAPI === "function" && typeof extractedSubmitAPI === "function") {
                    setFetchAPI(() => extractedFetchAPI);
                    setSubmitAPI(() => extractedSubmitAPI);
                    console.log("✅ API functions loaded successfully.");
                } else {
                    console.error("❌ API functions not found.");
                }
            } catch (error) {
                console.error("❌ Error evaluating script:", error);
            }
            })
            .catch(error => console.error("Failed to load script:", error));
    }, []);

    const handleFetch = async (date) => {
        if (fetchAPI) {
            try {
                const data = await fetchAPI(date);
                console.log("Fetched Data:", data);
                return data;
            } catch (error) {
                console.error("Error fetching data:", error);
                return null;
            }
        } else {
            console.error("fetchAPI is not available");
            return null;
        }
    };

    const handleSubmit = async (formData) => {
        if (submitAPI) {
            try {
                const response = await submitAPI(formData);
                console.log("Submit Response:", response);
                return response;
            } catch (error) {
                console.error("Error submitting data:", error);
                return null;
            }
        } else {
            console.error("submitAPI is not available");
            return null;
        }
    };

    function updateTimes(state, action) {
      console.log("Action: ", action);
      console.log("State: ", state);
        if (action.type === "SET_TIMES") {
            return { availableTimes: action.payload };
        }

        return {availableTimes: fetchAPI(new Date(action))};
    }

    const [state, dispatch] = useReducer(updateTimes, { availableTimes: [] });

    useEffect(() => {
        if (fetchAPI) {
            handleFetch(new Date()).then(data => {
                dispatch({ type: "SET_TIMES", payload: data });
            });
        }
    }, [fetchAPI]);

    const navigate = useNavigate();
    
    async function submitForm(formData) {
        const response = await handleSubmit(formData);
        console.log("handleSubmit response: ", response);
        if (response) {
            navigate("/confirmation");
        }
    }

    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/booking" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path='/confirmation' element={<ConfirmedBooking />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
