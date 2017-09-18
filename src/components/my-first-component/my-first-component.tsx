import { Component, Prop } from '@stencil/core'

@Component({
	tag: 'my-first-component',
	styleUrl: 'my-first-component.scss'
})

export class MyComponent {
	@Prop() name: string;
	//@Prop() age: string;
	render(){
		if(this.name){
			return (<p>Hello, {this.name}</p>)
		} else {
			return (<p>Hello World!</p>)
		}
	}
}

//ES6 Templating
//render(){ return (`My First Name is ${this.name}) }`

//ES6 Conditional rendering
// <div>
// { this.name ?
// <p>Hello {this.name}</p>:
// <p>Hello World!</p>
// }
// </div>