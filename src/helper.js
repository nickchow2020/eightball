function returnRandomItem(items){
    const randomIdex = Math.floor(Math.random() * items.length)
    return items[randomIdex]
}

export {returnRandomItem}