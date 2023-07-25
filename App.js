function App(){
    return (
        <div>
            <Tweet
                name="John Wick"
                username="@JohnWick"
                date={new Date().toDateString()}
                message="Who killed my dog?!"
            />
            <Tweet
                name="Elon Musk"
                username="@ElonMusk"
                date={new Date().toDateString()}
                message="I'm going to Mars!"
            />
            <Tweet
                name="Jeff Bezos"
                username="@JeffBezos"
                date={new Date().toDateString()}
                message="Amazon is going to the moon!"
            />
        </div>
    );
}