'use strict'

    
    function ProjectList(props) {
      
      return <div className="myholder">
      <h1>{props.message1}</h1>
      <h3>{props.message2}</h3>
        <h3>{props.message3}</h3>
    <h4>{props.message4}</h4>
      <ul>
        {
          props.list.map( 
            (item,index) => (
              <li key={index}>
                <strong>{item.projectname}</strong>
                <br/>{item.projectdate}
                <br/>{item.projectdescription}
                <br/>
                <a href={item.url}>{item.url}</a>
                <p>
                  
                <img src={item.thumbnail} height={280} alt={item.alttext} />
                
                    
                  </p>
               
                <br/>
              </li>
              
            )
          )
        }
      </ul>
    </div>;
    }
    

   
    jQuery.getJSON(
      'data.json', 
      function(myJSON) {
        //  output component into existing element
        // pass properties as attributes:
        ReactDOM.render(
          <ProjectList list={myJSON} message1="Welcome to My JavaScript Projects" message2="Swipe left to see more" message3="Swipe right to go back" message4="Click on an image to see the site!" />,
          document.getElementById('mirApp')
        );

        // swipe
        const mc = new Hammer( document.getElementById('mirApp') );
        mc.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });
        mc.on(
          "swipe", 
          function(ev) {
            console.log("swipe " + ev.direction);
            if (ev.direction == 4) {
              jQuery('.myholder ul').css('left','+=300px');
            } else if (ev.direction == 2) {
              jQuery('.myholder ul').css('left','-=300px');
            }
          }
        );
      }
    );
