import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const {setFiltro}=props
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input  type="text" onChange={(e) =>setFiltro(e.target.value.toLocaleLowerCase())} />
    </>
  );
}

export default Search;