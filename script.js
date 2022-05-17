'use strict';

// define a react page component using traditional pure JS
function ProjectList(props) {
  // return some output for the component using JSX
  return <div className="myholder">
      <ol>
        {
          // use map() to loop thru array passed in props.list, creating new element for each array value
          props.list.map( 
            // copy current array value into item and pass to arrow function
            (item,index) => (
              <li key={index}>
                <a href={item.link}>{item.firstname}</a>
                <br />
                <img src={item.imagepath} alt={item.firstname} />
              </li>
            )
          )
        }
      </ol>
    </div>;
}

// load dataset from external json using jquery
jQuery.getJSON(
  // getJSON() takes 2 args: 1st is path to json file, 2nd is anon function to run with data
  'data1.json',
  function(jsonFromJquery) {
    // inside this function code can run that accesses the json data

    // call react render() to output a component into an existing html element
    // pass properties as attributes: list passes array stored in var named data
    // message1 and message2 passed as literal values
    ReactDOM.render(
      <ProjectList list={jsonFromJquery} />,
      document.getElementById('mirApp')
    );

    // use the Hammer.js library to detect horiz swipe gestures on our #myApp div
    const mc = new Hammer( document.getElementById('mirApp') );
    mc.get("swipe").set( { direction: Hammer.DIRECTION_HORIZONTAL } );
    mc.on(
      "swipe",
      function(ev) {
        console.log(ev.direction);
        if (ev.direction == 2) {
          jQuery('.holder ul').css('left','+=300px');
        } else if (ev.direction == 4) {
          jQuery('.holder ul').css('left','-=300px');
        }
      }

    );

  }

);



