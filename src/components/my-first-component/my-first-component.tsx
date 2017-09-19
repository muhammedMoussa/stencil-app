import { Component, Prop } from '@stencil/core'

@Component({
	tag: 'my-first-component',
	styleUrl: 'my-first-component.scss'
})

export class MyComponent {
	handleClick(event: UIEvent){
		alert('Hello World!' )
	};
	handleChang(event){
		console.log('Input value: ' + event.target.value)
	};
	render(){
		 return (
		    <div>
				<button onClick={ (event: UIEvent) => this.handleClick(event) }>Click!</button>
				<input onChange={ (event: UIEvent) => this.handleChang(event) } />
		    </div>
		  )
	}
}

// Contxt way
// <button onClick={this.handleClick.bind(this)}>Click!</button>
