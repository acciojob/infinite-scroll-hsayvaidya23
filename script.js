//your code here!
const InfiniteList = document.getElementById('infi-list');

const addListItems = (count = 2) => {
	for(let i=0; i < count ; i++ ) {
		const ListItem = document.createElement('li');
		ListItem.textContent = `Item ${InfiniteList.children.length +  1}`;
		InfiniteList.appendChild(ListItem);
	}
}

addListItems(10);

InfiniteList.addEventListener('scroll', () => {
	if (InfiniteList.scrollTop + InfiniteList.clientHeight >= InfiniteList.scrollHeight) {
        addListItems(2);
    }
})