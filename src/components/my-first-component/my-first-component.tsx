import { Component, Prop } from '@stencil/core'

@Component({
	tag: 'my-first-component',
	styleUrl: 'my-first-component.scss'
})

export class MyComponent {
	@Prop() name: string;
	@Prop() age: string;

	render(){
		return(
			<div>
				<p>My First Name is {this.name}</p>
				<p>My Age is {this.age}</p>
			</div>
		)
	}
}