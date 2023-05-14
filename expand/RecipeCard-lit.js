import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class RecipeCard extends LitElement {
	static properties = {
		data: {state: true},
	};

	static styles = css`
	* {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
    
      a {
        text-decoration: none;
      }
    
      a:hover {
        text-decoration: underline;
      }
    
      article {
        align-items: center;
        border: 1px solid rgb(223, 225, 229);
        border-radius: 8px;
        display: grid;
        grid-template-rows: 118px 56px 14px 18px 15px 36px;
        height: auto;
        row-gap: 5px;
        padding: 0 16px 16px 16px;
        width: 178px;
      }
    
      div.rating {
        align-items: center;
        column-gap: 5px;
        display: flex;
      }
    
      div.rating>img {
        height: auto;
        display: inline-block;
        object-fit: scale-down;
        width: 78px;
      }
    
      article>img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        height: 118px;
        object-fit: cover;
        margin-left: -16px;
        width: calc(100% + 32px);
      }
    
      p.ingredients {
        height: 32px;
        line-height: 16px;
        padding-top: 4px;
        overflow: hidden;
      }
    
      p.organization {
        color: black !important;
      }
    
      p.title {
        display: -webkit-box;
        font-size: 16px;
        height: 36px;
        line-height: 18px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    
      p:not(.title),
      span,
      time {
        color: #70757A;
        font-size: 12px;
      }`;

	constructor() {
		super();
	}
	
	render() {
		return html`
			<article>
			<img src="${this.data.imgSrc}" alt="${this.data.imgAlt}">
			<p class="title">
				<a href="${this.data.titleLnk}">${this.data.titleTxt}</a>
			</p>
			<p class="organization">${this.data.organization}</p>
			<div class="rating">
				<span>${this.data.rating}</span>
					<img src="../assets/images/icons/${this.data.rating}-star.svg" alt="${this.data.rating} stars">
				<span>(${this.data.numRatings})</span>
			</div>
			<time>${this.data.lengthTime}</time>
			<p class="ingredients">
				${this.data.ingredients}
			</p>
			</article>
			`;
	}
}

customElements.define('recipe-card', RecipeCard);