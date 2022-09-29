import React from 'react';
import"./Question.css";
const Question = () => {
    return (
        <div>
            <h1 className='Q-heading1'>Question and Answere </h1>
            <div className='Q-title'>
                <h1 className='Q-heading'>How does react js work?</h1>
                <p>React js work is usually virtual dom create.
                React components and their JSX are no different from other template libraries. 
                For instance, Handlebars will render a template to HTML markup as a string,
                
                 which is then inserted into the browser DOM. Where React is different from libraries like Handlebars
                  is when data changes, and we need to re-render the component. Handlebars will just rebuild the entire HTML
                   string, the same way it did on the initial render. Since this is problematic for performance,
                    we often end up implementing imperative workarounds that manually update tiny bits of the DOM. 
                    What we end up with is a tangled mess of declarative templates,
                 and imperative code to handle the dynamic aspects of the UI
                </p>
            </div>
            <div className='Q-title'>
                <h1 className='Q-heading'>props vs state </h1>
                <p>Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.
                The state is a built-in React object that is used to 
                contain data or information about the component. A component's state can change over time;
                 whenever it changes, the component re-renders.
                </p>
            </div>
            <div className='Q-title'>
                <h1 className='Q-heading'>useEffect other uses?</h1>
                <p>The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.
                    
                </p>
            </div>
        </div>
    );
};

export default Question;