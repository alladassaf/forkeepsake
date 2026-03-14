import React, { useState, useEffect } from 'react'
import ErrMsg  from './ErrMsg'

function Contact() {
    
    const [values, setValues] = useState(
        {
            isValid: false,
            first: {
                value: '',
                message: '',
                error: false
            },
            last: {
                value: '',
                message: '',
                error: false
            },
            topic: {
                value: '',
                message: '',
                error: false
            },
            email: {
                value: '',
                message: '',
                error: false
            },
            comment: {
                value: '',
                message: '',
                error: false
            }
        }
    )


    useEffect(() => {
        console.log(values)
    }, [values])

    

/*     function validateInput(val, inpEl) {

        const label = inpEl.previousElementSibling

        
        if (label.htmlFor == 'first') {
            setValues(prevState => ({...prevState, first: { value: val, message: prevState.first.message, error: false}}))

        }
        
        if (label.htmlFor == 'last') {
            setValues(prevState => ({...prevState, last: { value: val, message: prevState.last.message, error: false}}))

        }
        
        if (label.htmlFor == 'topic') {
            setValues(prevState => ({...prevState, topic: { value: val, message: prevState.topic.message, error: false}}))

        }
        
        if (label.htmlFor == 'email') {
            setValues(prevState => ({...prevState, email: { value: val, message: prevState.email.message, error: false}}))

        }
        
        if (label.htmlFor == 'comment') {
            setValues(prevState => ({...prevState, comment: { value: val, message: prevState.comment.message, error: false}}))

        }

    } */

    function checkValidity(inputEl) {

        const label = inputEl.previousElementSibling

        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (values.first.value == "" && label.htmlFor == 'first') {
            setValues(prevState => ({...prevState, first: { value: prevState.first.value, message: 'Please enter in your first name.', error: true}}))
        } else if (values.first.value != "" && values.first.error && label.htmlFor == 'first') {
            setValues(prevState => ({...prevState, first: { value: prevState.first.value, message: '', error: false}}))
        }
        
        if (values.last.value == "" && label.htmlFor == 'last') {
            setValues(prevState => ({...prevState, last: { value: prevState.last.value, message: 'Please enter in your last name.', error: true}}))
        } else if (values.last.value != "" && values.last.error && label.htmlFor == 'last') {
            setValues(prevState => ({...prevState, last: { value: prevState.last.value, message: '', error: false}}))
        }
        
        if (values.topic.value == "" && label.htmlFor == 'topic') {
            setValues(prevState => ({...prevState, topic: { value: prevState.topic.value, message: 'Choose a topic so we can process your request.', error: true}}))
        } else if (values.topic.value != "" && values.topic.error && label.htmlFor == 'topic') {
            setValues(prevState => ({...prevState, topic: { value: prevState.topic.value, message: '', error: false}}))
        }
        
        if (!emailPattern.test(values.email.value) && label.htmlFor == 'email') {
            setValues(prevState => ({...prevState, email: { value: prevState.email.value, message: 'Not a valid email address', error: true}}))
            console.log(values.email.value.match(emailPattern))
        } else if (emailPattern.test(values.email.value) && values.email.error && label.htmlFor == 'email') {
            setValues(prevState => ({...prevState, email: { value: prevState.email.value, message: '', error: false}}))
        }

        if (values.comment.value.length < 4 && label.htmlFor == 'comment') {
            setValues(prevState => ({...prevState, comment: { value: prevState.comment.value, message: 'Comments must be at least 5 characters', error: true}}))
        } else if (values.comment.value.length > 4 && values.comment.error && label.htmlFor == 'comment') {
            setValues(prevState => ({...prevState, comment: { value: prevState.comment.value, message: '', error: false}}))
        }


    }

  return (
    <section className='contact_section'>
        <h3>Go Ahead, ask away</h3>
        <span>Please email <b>amandahr@forkeepsake</b> for more specific questions</span>
        <form action='' method='GET'>
            <div className='input_field span_50'>
                { <ErrMsg valid={values.first.error} errMsg={values.first.message} /> }
                <label htmlFor='first'>First Name</label>
                <input 
                    type='text' 
                    name='first' 
                    id='first'
                    value={values.first.value}
                    onChange={(e) => {setValues(prevState => ({ ...prevState, first: {value: e.target.value, message: '', error: prevState.first.error}}))}}
                    onBlur={(e) => {console.log('blurred'); checkValidity(e.target)}}
                >
                </input>
            </div>
            <div className='input_field span_50'>
                { <ErrMsg valid={values.last.error} errMsg={values.last.message} /> }
                <label htmlFor='last'>Last Name</label>
                <input 
                type='text' 
                name='last' 
                id='last'
                value={values.last.value}
                onChange={(e) => {setValues(prevState => ({ ...prevState, last: {value: e.target.value, message: '', error: prevState.last.error}}))}}
                onBlur={(e) => {checkValidity(e.target)}}
            >
            </input>
            </div>
            <div className='input_field span_50'>
                { <ErrMsg valid={values.topic.error} errMsg={values.topic.message} /> }
                <label htmlFor='topic'>Topic</label>
                <select 
                    type='text' 
                    name='topic' 
                    id='topic'
                    value={values.topic.value}
                    onChange={(e) => {setValues(prevState => ({ ...prevState, topic: {value: e.target.value, message: '', error: prevState.topic.error}}))}}
                    onBlur={(e) => {checkValidity(e.target)}}
                >
                    <option value=''></option>
                    <option value='Option 1'>Option 1</option>
                    <option value='Option 2'>Option 2</option>
                    <option value='Option 3'>Option 3</option>
                    <option value='Option 4'>Option 4</option>
                </select>
            </div>
            <div className='input_field span_50'>
                { <ErrMsg valid={values.email.error} errMsg={values.email.message} /> }
                <label htmlFor='email'>Email</label>
                <input 
                    type='text' 
                    name='email' 
                    id='email'
                    value={values.email.value}
                    onChange={(e) => {setValues(prevState => ({ ...prevState, email: {value: e.target.value, message: '', error: prevState.email.error}}))}}
                    onBlur={(e) => {checkValidity(e.target)}}
                >
                </input>
            </div>
            <div className='input_field'>
                { <ErrMsg valid={values.comment.error} errMsg={values.comment.message} /> }
                <label htmlFor='comment'>Comments</label>
                <textarea 
                    name='comment' 
                    id='comment'
                    value={values.comment.value}
                    onChange={(e) => {setValues(prevState => ({ ...prevState, comment: {value: e.target.value, message: '', error: prevState.comment.error}}))}}
                    onBlur={(e) => {checkValidity(e.target)}}
                >
                </textarea>
            </div>
            <button type='submit'>Send Message</button>
        </form>
    </section>
  )
}

export default Contact