import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
    return (
        <StyledWrapper>
            <div className="form-control">
                <input type="text" {...props} required />
                <label>
                    <span style={{transitionDelay: '0ms'}}>C</span><span style={{transitionDelay: '50ms'}}>i</span><span style={{transitionDelay: '100ms'}}>t</span><span style={{transitionDelay: '150ms'}}>y</span>
                </label>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .form-control {
        position: relative;
        margin-bottom: 1em;
        width: 190px;
    }

    .form-control input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
        color: #fff;
    }

    .form-control input:focus,
    .form-control input:valid {
        outline: 0;
        border-bottom-color: #b1dae7;
    }

    .form-control label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;
    }

    .form-control label span {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        color: #fff;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .form-control input:focus+label span,
    .form-control input:valid+label span {
        color: #b1dae7;
        transform: translateY(-30px);
    }`;

export default Input;
