import React, { Component } from 'react';
// import { render } from 'react-dom';

class FormInputText extends Component {
  renderErrorText() {
    console.log('errvalue', this.value)
    return this.props.valid ? false : (
      <p className="invalid">項目が入力されていません。</p>
    )
  }

  render(){
    return (
      <div>
        <label>{this.props.label}</label>
        <input 
          type="text" 
          name={this.props.name} 
          value={this.props.value} 
          onChange={this.props.inputChk} 
        />
        {this.renderErrorText()}
      </div>
    )
  }
}

class MyForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      field　: {
        name　: { 
          name: 'name', 
          label: 'お名前',
          labels: 'ななな',
          value: '', 
          valid: '' 
        },
        address : { 
          name: 'address', 
          label: '住所', 
          value: '', 
          valid: '' 
        }
      },
      errFlg : true,
    }
  }

  inputChk(e, fieldName) {
    const field = Object.assign({}, 
                  this.state.field);
    let value_a = e.target.value.trim();
    field[fieldName] = {
      value: value_a,
      valid: value_a ? true : false
    }
    this.setState({ field: field });
    this.allChk(field);
  }

  allChk(fieldState) {
    let errFlg = false;
    let field = fieldState || this.state.field;

    Object.keys(field).forEach(_fieldName => {
      if (!field[_fieldName].valid) {
        errFlg = true;
      }
    });
    this.setState({ errFlg: errFlg });
    return !errFlg;
  }

  sendForm() {
    // 送信前に入力内容を再チェック
    if (!this.allChk()) {
      return false;
    }

    // 送信するデータをまとめる
    const sendData = Object.keys(this.state.field).map(_fieldName => {
      return ({
        name: _fieldName,
        value: this.state.field[_fieldName].value,
      }
      // {this.state.field.name.value}
      // {this.state.field.address.value}
    )
    });
    console.log('date', sendData)
    console.log('value', this.state.value)
    // 送信処理を行う関数
    // this.props.sendForm(sendData);
  }

  render(){
    return (
      <div>
        <FormInputText 
          {...this.state.field.name} 
          inputChk={(e) => this.inputChk(e, 'name')}
        />
        <FormInputText 
          {...this.state.field.address} 
          inputChk={(e) => this.inputChk(e, 'address')} 
        />
          <button 
            onClick={() => this.sendForm()} 
            disabled={this.state.errFlg}
          >
            送信する
          </button>
        <div>
          <ul>
            <li>名前：{this.state.field.name.value}</li>
            <li>住所：{this.state.field.address.value}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MyForm;