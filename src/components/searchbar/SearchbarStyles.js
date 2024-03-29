import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  margin-bottom: 20px;
  margin-top: 5px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: rgb(233,219,222);
background: radial-gradient(circle, rgba(233,219,222,1) 4%, rgba(63,94,251,1) 79%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  .suggestions-frame {
      position: absolute;
      text-decoration: none;
      top: 85%;
 margin-top: 5px;
    width: 450px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0px;
    
    background-color: white;
    box-shadow: (0,0,0,0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    z-index: 2;
    color: black;
    .SuggestionList {
      list-style: none;
      padding: 0px;
      margin-left: 30px;
    }
    .SuggestionList__item:hover {
      cursor: pointer;
      color: #3f5efb;
    }
    
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  .SearchForm-button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-color: #e6dedb;
    background-image: url('https://cdn.svgapi.com/vector/8953/search.svg');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }
  .SearchForm-button:hover {
    opacity: 1;
  }
  .SearchForm-button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
  .SearchForm-input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }
  .SearchForm-input-wrapper {
    width: 100px;

  }
`;

