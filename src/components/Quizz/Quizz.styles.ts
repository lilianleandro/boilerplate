import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;

  h2 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }

  label {
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 1.2rem;
  }

  input[type='radio'] {
    appearance: none;
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border: 2px solid #ff69b4;
    border-radius: 2px;
    margin-right: 5px;
  }

  input[type='radio']:checked {
    background-color: #ff69b4;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    background-color: #ff69b4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`

export const Answer = styled.div`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  radio: {
    margin-right: 1rem;
  }
`
