import './search-styles.css';

// the css can be applied on all project, it can affect everything, not only the component that is targeted. But this should not be the case, styles should be seperated and related to components, so that it is easier to manage. //

const SearchBox= ({className, placeholder, onChange}) => {
            <div> 
                <input 
                    className={`search-box ${className}`}
                    //this is for css, so that the class-name style can have a style applied to it. This is going to apply by default because it is IN the component. 
                     type='search' 
                    placeholder={placeholder} 
                    onChange={onChange} 
                />
            </div>
        }

export default SearchBox;