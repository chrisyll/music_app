import React from 'react';
import classes from './App.module.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import ToTopButton from './components/ToTopButton/ToTopButton';
import Layout from './containers/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact'
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Upload from './components/Upload/Upload';
import Redeem from './components/Redeem/Redeem';
import Checkout from './components/Checkout/Checkout';
import SearchResultPage from './components/SearchResultPage/SearchResultPage';
import Tokens from './components/Tokens/Tokens';


class App extends React.Component {

  state = {
    isOpen: false,
    inCart: [],
    showAdded: 'hidden'
  }

  render() { 

    const drawerToggleHandler = () => {
      const temp = !this.state.isOpen;
      this.setState({isOpen: temp});
    }

    const setClosed = () => {
      this.setState({isOpen: false});
    }

    const cartHandler = (data) => {
      const myArray = this.state.inCart;
      if (!myArray.includes(data)){
        myArray.push(data);
        this.setState({inCart:myArray, showAdded: 'visible'});
      }
      setTimeout(() => {
        this.setState({showAdded: 'hidden'});
      }, 1500);
    }

    const resetOrder = () => {
      this.setState({inCart: []});
    }

    const handleRemove = (index) => {
      const temp = [...this.state.inCart];
      temp.splice(index, 1);
      console.log(temp);
      this.setState({inCart: [...temp]});
    }

    const buyHandler = (data) => {
      
      const myArray = [];
      myArray.push(data);
      this.setState({inCart: myArray});
    }

    return (
      <div className= {classes.App}>
        <Navigation 
          open = {this.state.isOpen} 
          toggleDrawer = { drawerToggleHandler } 
          routed = {this.state.isOpen} 
          inCart = {this.state.inCart}/>
        <SideDrawer
          open = {this.state.isOpen} 
          routed = {setClosed}/>
        <div className= {classes.Message} style = {{visibility: this.state.showAdded}}>Item added to cart.</div>
        <Routes>
          <Route 
            path = '/' 
            element = {<Layout cartHandler = {(data) => cartHandler(data)} buyHandler = {(data) => buyHandler(data)} />}/>
          <Route 
            path = '/search-result-page' 
            element = {<SearchResultPage cartHandler = {(data) => cartHandler(data)} buyHandler = {(data) => buyHandler(data)} />} /> 
          <Route 
            path = '/upload' 
            element = {<Upload />}/>
          <Route 
            path = '/redeem-token' 
            element = {<Redeem />}/>
          <Route 
            path = '/contact-us' 
            element = {<Contact />}/>
          <Route 
            path = '/faqs' 
            element = {<Faq />} />
          <Route 
            path = '/about' 
            element = {<About />} />
          <Route 
            path = '/checkout' 
            element = {<Checkout itemList = {this.state.inCart}  handleRemove = { (index) => handleRemove(index)} />} />
           <Route 
            path = '/tokens' 
            element = {<Tokens itemList = {this.state.inCart} resetOrder = { resetOrder } />} />
        </Routes>
        <Footer />
        <ToTopButton />
      </div>
    );
  }
}
 
export default App;