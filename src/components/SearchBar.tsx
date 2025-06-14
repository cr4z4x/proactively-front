import './component-styles/SearchBar.css';

const SearchBar = () => (
    <div className="search-bar">
        <div className="search-input-group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <input type="text" placeholder="Condition, procedure..." />
        </div>
        <div className="search-input-group">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <input type="text" placeholder="City, state, or zipcode" />
        </div>
        <div className="search-input-group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 4.5V19.5H1.5V4.5H22.5ZM24 3H0V21H24V3Z" fill="#8B8E9C"/>
            <path d="M13.5 7.5H21V9H13.5V7.5ZM13.5 10.5H21V12H13.5V10.5ZM13.5 13.5H16.5V15H13.5V13.5ZM9.75 7.5C8.85 7.5 8.1 8.4 7.5 9C6.9 8.4 6.15 7.5 5.25 7.5C3 7.5 2.1 10.35 3.75 11.85L7.5 15L11.25 11.85C12.9 10.35 12 7.5 9.75 7.5Z" fill="#8B8E9C"/>
            </svg>
            <input type="text" placeholder="Insurance Carrier" />
        </div>
        <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89605 2.00628e-08C7.47736 0.000120879 6.07928 0.339494 4.81844 0.989804C3.5576 1.64011 2.47056 2.5825 1.64802 3.73835C0.825473 4.8942 0.291278 6.22998 0.0899992 7.63426C-0.111279 9.03854 0.0261946 10.4706 0.490952 11.8109C0.955709 13.1513 1.73427 14.361 2.76169 15.3393C3.7891 16.3176 5.03557 17.036 6.3971 17.4346C7.75864 17.8331 9.19575 17.9004 10.5886 17.6306C11.9813 17.3609 13.2894 16.7619 14.4037 15.8839L18.2262 19.7062C18.4236 19.8968 18.688 20.0023 18.9624 20C19.2368 19.9976 19.4994 19.8875 19.6934 19.6934C19.8875 19.4994 19.9976 19.2369 20 18.9625C20.0023 18.688 19.8968 18.4236 19.7062 18.2262L15.8837 14.4039C16.9178 13.0921 17.5617 11.5156 17.7417 9.8549C17.9216 8.19422 17.6304 6.51642 16.9013 5.01352C16.1722 3.51061 15.0347 2.24333 13.619 1.35669C12.2033 0.470054 10.5665 -0.000112141 8.89605 2.00628e-08ZM2.09261 8.89647C2.09261 7.09215 2.8094 5.36173 4.08529 4.08589C5.36118 2.81005 7.09166 2.09329 8.89605 2.09329C10.7004 2.09329 12.4309 2.81005 13.7068 4.08589C14.9827 5.36173 15.6995 7.09215 15.6995 8.89647C15.6995 10.7008 14.9827 12.4312 13.7068 13.707C12.4309 14.9829 10.7004 15.6996 8.89605 15.6996C7.09166 15.6996 5.36118 14.9829 4.08529 13.707C2.8094 12.4312 2.09261 10.7008 2.09261 8.89647Z" fill="white"/>
            </svg>
            Find now
        </button>
    </div>
);
export default SearchBar;