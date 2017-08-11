// write code here and press Ctrl+Enter to execute
const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

let data = [
 { name: "Mo Jombo",
   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
   company: "Facebook"
  },
  { name: "De Funkt",
    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    company: "GitHub"
  }
];

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

ReactDOM.render(<CardList cards={data} />, mountNode);
