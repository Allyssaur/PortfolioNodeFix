import HTMLFlipBook from "react-pageflip";


function Book (props) {
    //const pageDate = [

   // ];

    return (
        <HTMLFlipBook 
            width={370} 
            height={450}
            maxShadowOpacity={0.5}
            drawShadow={true}
            showCover={true}
            size="fixed"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
        >
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page-cover"> <h1>Cover</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page1"> <h1>Page 1</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page2"><h1>Page 2</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page3"><h1>Page 3</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page4"><h1>Page 4</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page5"> <h1>Page 5</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page6"><h1>Page 6</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page7"><h1>Page 7</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page8"><h1>Page 8</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page9"> <h1>Page 9</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page10"><h1>Page 10</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page11"><h1>Page 11</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page12"><h1>Page 12</h1>
                </div>
            </div>
                        <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page13"> <h1>Page 13</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page14"><h1>Page 14</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page15"><h1>Page 15</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page16"><h1>Page 16</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page17"> <h1>Page 17</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page18"><h1>Page 18</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page19"><h1>Page 19</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page20"><h1>Page 20</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page21"> <h1>Page 21</h1>
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page22"><h1>Page 22</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page23"><h1>Page 23</h1>
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page24"><h1>Page 24</h1>
                </div>
            </div>
        </HTMLFlipBook>
    );
}

export default Book  

/*import React from "react"
import HTMLFlipBook from "react-pageflip"
import { forwardRef } from "react";

    
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page page-content" ref={ref} data-density="hard">
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function Book(props) {
  return (
    <HTMLFlipBook width={300} height={500}>
      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
    </HTMLFlipBook>
  );
}

export default Book 

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="demoPage" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
        </div>
      </div>
    );
  });
  
  class Book extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        page: 0,
        totalPage: 0,
      };
    };
  
    nextButtonClick = () => {
      this.flipBook.getPageFlip().flipNext();
    };
  
    prevButtonClick = () => {
      this.flipBook.getPageFlip().flipPrev();
    };
  
    onPage = (e) => {
      this.setState({
        page: e.data,
      });
    };
  
    componentdidMount() {
      this.setState({
        totalPage: this.flipBook.getPageFlip().getPageCount()
      });
    };
  
    render() {
      return (
        <div>
          <HTMLFlipBook
            width={370}
            height={500}
            size="fixed"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            onFlip={this.onPage}
            onChangeOrientation={this.onChangeOrientation}
            onChangeState={this.onChangeState}
            className="demo-book"
            ref={(el) => (this.flipBook = el)}
          >

            <PageCover></PageCover>
            <Page number={1} ><div></div></Page>
            <Page number={2}>Lorem ipsum...</Page>
            <Page number={3}>Lorem ipsum...</Page>
            <PageCover>THE END</PageCover>

          </HTMLFlipBook>
  
          <div className="container">
            <div>

              <button type="button" onClick={this.prevButtonClick}>
                Previous page
              </button>

              [<span>{this.state.page}</span> of
               <span>{this.state.totalPage}</span>]

              <button type="button" onClick={this.nextButtonClick}>
                Next page
              </button>

            </div>
            <div>

              State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>

            </div>
          </div>
        </div>
      );
    }
  }

export default Book
*/
