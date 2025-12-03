import HTMLFlipBook from "react-pageflip";

function Book (props) {

    if(window.innerHeight > window.innerWidth)
        { alert("For a better User Experience, Please use in LANDSCAPE mode."); }

    return (
        <HTMLFlipBook 
            width={370} 
            height={500}
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
                <div className="page-content page-cover">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page1">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page2">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page3">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page4">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page5">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page6">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page7">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page8">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page9">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page10">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page11">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page12">
                </div>
            </div>
                        <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page13">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page14">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page15">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page16">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page17">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page18">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page19">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page20">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className="page-content page21">
                </div>
            </div>
            <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page22">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page23">
                </div>
            </div>
              <div className="demoPage" style={{ background: 'transparent' }}>
                <div className=" page-content page24">
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
