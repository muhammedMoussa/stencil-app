import { Component, Prop } from '@stencil/core'

@Component({
	tag: 'my-first-component',
	styleUrl: 'my-first-component.scss'
})

export class MyComponent {
	constructor() {
       this.heroes = [
       	{name: 'Emad', age: 21},
       	{name: 'Essam', age: 22}
       ]
    }
	friends = [1, 2, 3];
	@Prop() name: string;
	heroes: any[];
	render(){
		 return (
		    <div>
		      {this.heroes.map( hero => {
		      	return(
					<div>
						<p>Name: {hero.name} - Age: {hero.age}</p>
					</div>
		      	)
		      })}
		    </div>
		  )
	}
}
