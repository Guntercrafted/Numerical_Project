import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './screen.css';
import { BookFilled,SmileOutlined } from '@ant-design/icons';

import Graphical from './Calculate/Root of Equation/Graphical';
import Bisection from './Calculate/Root of Equation/Bisection';
import FalsePosition from './Calculate/Root of Equation/False_position';
import Onepoint from './Calculate/Root of Equation/Onepoint';
import Newton from './Calculate/Root of Equation/Newton-raphson';
import Secant from './Calculate/Root of Equation/Secant';
import Cramer from './Calculate/Linear Algebra/Cramer';
import Gauss from './Calculate/Linear Algebra/Gauss';
import Jordan from './Calculate/Linear Algebra/Jordan';
import Inverse from './Calculate/Linear Algebra/Inverse';
import LU from './Calculate/Linear Algebra/LU';
import Cholesky from './Calculate/Linear Algebra/Cholesky';
import Jacobi from './Calculate/Linear Algebra/Jacobi';
import Seidel from './Calculate/Linear Algebra/Seidel';
import Gradient from './Calculate/Linear Algebra/Gradient';
import NewtonInterpolate from './Calculate/Interpolation/Newton';
import Lagrange from './Calculate/Interpolation/Lagrange';
import Spline from './Calculate/Interpolation/Spline';
import Linear from './Calculate/Regression/Linear';
import Polynomial from './Calculate/Regression/Polynomial';
import MultipleLinear from './Calculate/Regression/MultipleLinear';
import CompositeTrapezoidal from './Calculate/Integration/CompositeTrapzoidal';
import CompositeSimpson from './Calculate/Integration/CompositeSimpson';
import ForwardH from './Calculate/Differentiation/Forwardh';
import ForwardH2 from './Calculate/Differentiation/ForwardH2';
import BackwardH from './Calculate/Differentiation/Backwardh';
import BackwardH2 from './Calculate/Differentiation/Backwardh2';
import CentralH from './Calculate/Differentiation/Centralh';
import CentralH2 from './Calculate/Differentiation/Centralh2';
import Euler from './Calculate/ODE/Euler';
import Heun from './Calculate/ODE/Heun';
import ModifiedEuler from './Calculate/ODE/Modified_Euler';


const { SubMenu } = Menu;
const { Header, Content,Footer } = Layout;

class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header className="header" style={{backgroundColor: "DeepSkyBlue", color:"#F37325" ,height: "100px" }}>
            <div className="headertext">
              <label><SmileOutlined  style={{color:"MediumSlateBlue" ,fontSize:"50px", marginRight:"420px"}} />Numerical Method CSB</label>
            </div>
          </Header>
          <Layout>
            <Header className="header" style={{backgroundColor: "DeepSkyBlue",height: "100px"}}>
              <Menu theme="light" mode="horizontal" style={{backgroundColor: "PaleGreen",color:"CornflowerBlue",height: "70px" }}>
                <SubMenu key="root_submenu" title={<span>Root of Equation</span>}>
                  <Menu.Item key="menu_graphoical" ><Link to="/graphical">Graphical</Link></Menu.Item>
                  <Menu.Item key="menu_bisection" ><Link to="/bisection">Bisection</Link></Menu.Item>
                  <Menu.Item key="menu_false"><Link to="/false-position">False Position</Link></Menu.Item>
                  <Menu.Item key="menu_onepoint"><Link to="/one-point">One-Point Iteration</Link></Menu.Item>
                  <Menu.Item key="menu_newton"><Link to="/newton-raphson">Newton-Raphson</Link></Menu.Item>
                  <Menu.Item key="menu_secant"><Link to="/secant">Secant Method</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="algebra_submenu" title={<span>Linear Algebra</span>}>
                  <Menu.Item key="menu_cramer"><Link to="/cramer">Cramer's Rule</Link></Menu.Item>
                  <Menu.Item key="menu_gauss"><Link to="/gauss">Gauss's Elimination</Link></Menu.Item>
                  <Menu.Item key="menu_jordan"><Link to="/jordan">Gauss Jordan Method</Link></Menu.Item>
                  <Menu.Item key="menu_inverse"><Link to="/inverse">Matrix Inversion</Link></Menu.Item>
                  <Menu.Item key="menu_lu"><Link to="/lu">LU Decomposition</Link></Menu.Item>
                  <Menu.Item key="menu_cholesky"><Link to="/cholesky">Cholesky Decomposition</Link></Menu.Item>
                  <Menu.Item key="menu_jacobi"><Link to="/jacobi">Jacobi Iteration Method</Link></Menu.Item>
                  <Menu.Item key="menu_seidel"><Link to="/seidel">Gauss Seidel Iteration</Link></Menu.Item>
                  <Menu.Item key="menu_gradient"><Link to="/conjugate-gradient">Conjugate Gradient Method</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="interpolate_submenu" title={<span>Interpolation</span>}>
                  <Menu.Item key="menu_divide"><Link to="/newton">Newton Divide Difference</Link></Menu.Item>
                  <Menu.Item key="menu_lagrange"><Link to="/lagrange">Lagrange</Link></Menu.Item>
                  <Menu.Item key="menu_spline"><Link to="/spline">Spline</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="regression_submenu" title={<span>Least Squares Regression</span>}>
                  <Menu.Item key="menu_linear"><Link to="/linear">Linear Regression</Link></Menu.Item>
                  <Menu.Item key="menu_poly"><Link to="/polynomial">Polynomial Regression</Link></Menu.Item>
                  <Menu.Item key="menu_multiple"><Link to="/multiple-linear">Multiple Linear Regression</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="integrate_submenu" title={<span>Integration</span>}>
                  <Menu.Item key="menu_compositeTrapzoidal"><Link to="/trapezoidal">Composite Trapezoidal Rule</Link></Menu.Item>
                  <Menu.Item key="menu_compositeSimpson"><Link to="/simpson">Composite Simpson's Rule</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="diff_submenu" title={<span>Differentiation</span>}>
                  <Menu.Item key="menu_forwardh"><Link to="/forwardh">Forward Divided-Differences O(h)</Link></Menu.Item>
                  <Menu.Item key="menu_backwardh"><Link to="/backwardh">Backward Divided-Differences O(h)</Link></Menu.Item>
                  <Menu.Item key="menu_centralh"><Link to="/centralh">Central Divided-Differences O(h{<sup>2</sup>})</Link></Menu.Item>
                  <Menu.Item key="menu_forward2h"><Link to="/forwardh2">Forward Divided-Differences O(h{<sup>2</sup>})</Link></Menu.Item>
                  <Menu.Item key="menu_backward2h"><Link to="/backwardh2">Backward Divided-Differences O(h{<sup>2</sup>})</Link></Menu.Item>
                  <Menu.Item key="menu_central2h"><Link to="/centralh2">Central Divided-Differences O(h{<sup>4</sup>})</Link></Menu.Item>
                </SubMenu>
                {/*<SubMenu key="de_submenu" title={<span>Ordinary Differential Equation</span>}>
                  <Menu.Item key="menu_euler"><Link to="/euler">Euler's Method</Link></Menu.Item>
                  <Menu.Item key="menu_heun"><Link to="/heun">Heun's Method</Link></Menu.Item>
                  <Menu.Item key="menu_modifier"><Link to="/modifier-euler">Modifier Euler's Method</Link></Menu.Item>
                  </SubMenu>*/}
              </Menu>
            </Header>
            
            <Layout style={{ backgroundColor: "MediumTurquoise",padding: '0 25px 25px' }}>
              <Content style={{ padding: 150, margin: 0, minHeight: 280}}>
                <Switch>
                  {/* Root of Equation */}
                  <Route exact path="/graphical" component={Graphical} />
                  <Route exact path="/bisection" component={Bisection} />
                  <Route exact path="/false-position" component={FalsePosition} />
                  <Route exact path="/one-point" component={Onepoint} />
                  <Route exact path="/newton-raphson" component={Newton} />
                  <Route exact path="/secant" component={Secant} />
                  {/* Linear Algebra */}
                  <Route exact path="/cramer" component={Cramer} />
                  <Route exact path="/gauss" component={Gauss} />
                  <Route exact path="/jordan" component={Jordan} />
                  <Route exact path="/inverse" component={Inverse} />
                  <Route exact path="/lu" component={LU} />
                  <Route exact path="/cholesky" component={Cholesky} />
                  <Route exact path="/jacobi" component={Jacobi} />
                  <Route exact path="/seidel" component={Seidel} />
                  <Route exact path="/conjugate-gradient" component={Gradient} />
                  {/* Interpolation */}
                  <Route exact path="/newton" component={NewtonInterpolate} />
                  <Route exact path="/lagrange" component={Lagrange} />
                  <Route exact path="/spline" component={Spline} />
                  {/* Regression */}
                  <Route exact path="/linear" component={Linear} />
                  <Route exact path="/polynomial" component={Polynomial} />
                  <Route exact path="/multiple-linear" component={MultipleLinear} />
                  {/* Integration */}
                  <Route exact path="/trapezoidal" component={CompositeTrapezoidal} />
                  <Route exact path="/simpson" component={CompositeSimpson} />
                  {/* Differentiation */}
                  <Route exact path="/forwardh" component={ForwardH} />
                  <Route exact path="/backwardh" component={BackwardH} />
                  <Route exact path="/centralh" component={CentralH} />
                  <Route exact path="/forwardh2" component={ForwardH2} />
                  <Route exact path="/backwardh2" component={BackwardH2} />
                  <Route exact path="/centralh2" component={CentralH2} />
                  {/* Ordinary Differential Equation (ODE) */}
                  <Route exact path="/euler" component={Euler} />
                  <Route exact path="/heun" component={Heun} />
                  <Route exact path="/modifier-euler" component={ModifiedEuler} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
          <Footer style={{ backgroundColor: "DeepSkyBlue", minHeight: 120 }}>
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "White" }}>
              Chissanupong Bunnag 6204062663021 CSB<br/>

              <p style={{fontSize:"22px", verticalAlign:"text-bottom"}}><BookFilled style={{ fontSize: "25px" }} /><a target="_blank" rel="noopener noreferrer" href="http://cs.kmutnb.ac.th/" style={{ color: "White", textDecoration: "none" }}> Department of Computer and Information Science - King Mongkut's University of Technology North Bangkok</a></p>

            </p>


          </Footer>
        </Layout>
      </Router>
    )
  }
}
export default App;
