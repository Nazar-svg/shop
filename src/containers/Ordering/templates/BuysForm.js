import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Counter from '../../../Counter/Counter';

export default class BuysForm extends React.Component {
  state = {
    total: 0,
    products: [
      {
        count: 1,
        name: 'Назва продукту',
        picture:
          'https://avatars.mds.yandex.net/get-mpic/932277/img_id195231539927885682.png/6hq',
        price: 1000,
      },
      {
        count: 1,
        name: 'Назва продукту 2',
        picture:
          'https://avatars.mds.yandex.net/get-mpic/932277/img_id195231539927885682.png/6hq',
        price: 1000,
      },
    ],
  };
  componentDidMount() {
    this.setState({
      total: this.getTotal(this.state.products),
    });
  }

  onPlas = (index) => {
    let products = [...this.state.products];
    let total = 0;
    products[index].count++;
    total = this.getTotal(products);
    this.setState({
      products,
      total,
    });
  };

  onMinus = (index) => {
    let products = [...this.state.products];
    let total = 0;
    if (products[index].count > 1) {
      products[index].count--;
    }

    total = this.getTotal(products);
    this.setState({
      products,
      total,
    });
  };
  getTotal = (products) => {
    return products.reduce((acc, item) => {
      acc += item.price * item.count;
      return acc;
    }, 0);
  };
  onDeleteItem(index) {
    const products = [...this.state.products];
    products.splice(index, 1);
    let total = 0;
    total = this.getTotal(products);
    this.setState({
      products,
      total,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Замовлення
        </Typography>
        <List>
          {this.state.products.map((product, index) => (
            <ListItem key={index}>
              <i
                onClick={() => this.onDeleteItem(index)}
                className="fa fa-times"
                style={{
                  padding: '4px 7px',
                  color: 'red',
                  fontWeight: '700',
                  background: '#c1c1c1',
                  borderRadius: '55px',
                  fontSize: '22px',
                  cursor: 'pointer',
                }}
              />

              <div style={{ padding: '50px', cursor: 'pointer' }}>
                <img
                  src={product.picture}
                  alt="Product"
                  width="100px"
                  height="50px"
                />
              </div>
              <ListItemText primary={product.name} />
              <div style={{ margin: '50px' }}>
                <i
                  className="fas fa-minus"
                  onClick={() => this.onMinus(index)}
                />
                <span
                  style={{
                    margin: '10px',
                    padding: '5px 10px',
                    border: '1px solid #c1c1c1',
                  }}
                >
                  {product.count}
                </span>
                <i className="fas fa-plus" onClick={() => this.onPlas(index)} />
              </div>
              <Typography variant="body2">
                {product.price * product.count}
              </Typography>
            </ListItem>
          ))}
          <ListItem>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1">{this.state.total}</Typography>
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
