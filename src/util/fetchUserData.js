
export default function fetchUserDate(username, onLoad ) {
    fetch(`https://api.github.com/users/${encodeURI(username)}?access_token=${process.env["REACT_APP_GITHUB_TOKEN"]}`)
        .then(res => res.json())
        .then(data => onLoad && onLoad(data))
        .catch(err => {
            throw new Error(`fetch getUserData failed ${err}`);
        });
};


