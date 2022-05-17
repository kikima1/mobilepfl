'use strict'

    // define a react page component using traditional pure JS
    function ProjectList(props) {
      // return some output for the component using JSX
      return <div className="myholder">
           <ul>
        {
          props.list.map( 
            (item,index) => (
              <li key={index}>
                <strong>{item.projectname}</strong>
                <br/>{item.projectdate}
                <br/>{item.projectdescription}
                <br/>
                
                <p>
                  <a href={item.url}>
                <img src={item.thumbnail}  width={200} height={200} alt={item.alttext} />
                
                    </a>
                  </p>
                <br/>
              </li>
              
            )
          )
        }
      </ul>
        </div>;
    }
    

    // use jQuery to load JSON
    jQuery.getJSON(
      'data.json', 
      function(jsonFromJquery) {
        // after JSON loaded, call react render() to output component into existing element
        // pass properties as attributes: list passes array stored in var jsonFromJquery
        ReactDOM.render(
          <ProjectList list={jsonFromJquery} />,
          document.getElementById('mirApp')
        );

        // attach gesture: swipe
        const mc = new Hammer( document.getElementById('mirApp') );
        mc.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });
        mc.on(
          "swipe", 
          function(ev) {
            console.log("swipe " + ev.direction);
            if (ev.direction == 2) {
              jQuery('.myholder ul').css('left','+=300px');
            } else if (ev.direction == 4) {
              jQuery('.myholder ul').css('left','-=300px');
            }
          }
        );
      }
    );