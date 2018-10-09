import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { FaSearch } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

class DepartmentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value:'',
          shouldHideSearchIcon: false,
          shouldHideDeleteIcon: true,
          className: 'search-box',
          products: props.products
        };

        this.options = {
            sortIndicator: true,
            noDataText: 'No Products Found...'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true,
            hideSelectColumn: true
        };

         this.handleChange = this.handleChange.bind(this);
         this.onDeleteClick= this.onDeleteClick.bind(this);
         this.onSearchClick= this.onSearchClick.bind(this);
         this.handleSearhOnFocus = this.handleSearhOnFocus.bind(this);
         this.getFilteredDepartments = this.getFilteredDepartments.bind(this);
    }

    handleChange(event){
      this.setState({
        value: event.target.value,
        shouldHideSearchIcon: true,
        shouldHideDeleteIcon: false
      });
    }

    onSearchClick(event){
      this.setState({
        shouldHideSearchIcon: true,
        shouldHideDeleteIcon: false,
        className: 'search-box search-box-focus'
      });
    }

    onDeleteClick(event){
      this.setState({
        value:'',
        shouldHideSearchIcon: false,
        shouldHideDeleteIcon: true,
        className: 'search-box'
      });
    }

    handleSearhOnFocus(event){
      this.setState({
        className: 'search-box search-box-focus'
      });
    }

    getFilteredDepartments = () => {
      const {departments} = this.props;
      const {value}       = this.state;
      return departments.filter(d =>
                d.title.toLowerCase().includes(value.toLowerCase()));
    }

    render() {
        const {shouldHideSearchIcon, shouldHideDeleteIcon} = this.state;

        return (
          <div>
            <label>
              Department Title Filter :
            </label>
            <div className="btn-group">
              <input className={this.state.className}
                     type="search"
                     value={this.state.value}
                     onFocus={this.handleSearhOnFocus}
                     onChange={this.handleChange}/>
              <button>
                  <FaSearch onClick={this.onSearchClick}
                            id="search-icon"
                            className={shouldHideSearchIcon ? 'hidden' : ''}/>
                  <MdDeleteForever onClick={this.onDeleteClick}
                                   id="delete-icon"
                                   className={shouldHideDeleteIcon ? 'hidden' : ''}/>
              </button>
            </div>

            <BootstrapTable id="result-table"
                            data={this.getFilteredDepartments()}
                            selectRow={this.selectRowProp}
                            options={this.options}
                            bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey>Id</TableHeaderColumn>
                <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
    }

}

DepartmentList.propTypes = {
    departments: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};

export default DepartmentList;
