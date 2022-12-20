const url = 'https://purpleschool.ru/course/javascript';
const showUrlData = (url) => {
    const [protocol, domenUrl] = url.split('://');
    const [domainName, ...path] = domenUrl.split("/");
    const otherPath = '/' + path.join('/')

    console.log(`    - Протокол (${protocol})
    - Доменное имя (${domainName})
    - Путь внутри сайта (${otherPath})`)
}
showUrlData(url)