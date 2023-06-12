import Link from 'next/link'
import React from 'react'
import CommentForm from '../src/components/comment_form'
import Layout from '../src/layout/layout'

export default function NewsSingle() {
  return (
    <Layout style="light">
      {/* BLOG SINGLE */}
      <div className="glax_tm_section">
        <div className="glax_tm_main_title_holder">
          <div className="container">
            <div className="title_holder">
              <h3>Hello world!</h3>
            </div>
            <div className="builify_tm_breadcrumbs">
              <ul>
                <li><Link href="/"><a>Glax Home</a></Link></li>
                <li className="shape"><span /></li>
                <li><Link href="/blog"><a>Uncategorized</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="glax_tm_section">
        <div className="container">
          <div className="glax_tm_blog_single_wrap">
            <div className="glax_tm_twicebox_wrap">
              <div className="leftbox">
                <div className="image_holder_blog">
                  <img src="img/slider/4.jpg" alt />
                </div>
                <div className="commentbox">
                  <div className="comment_wrap">
                    <div className="title">
                      <h3>One Comment</h3>
                    </div>
                    <div className="author_wrap">
                      <div className="image_author">
                        <img src="img/clients/1.jpg" alt />
                      </div>
                      <div className="definition">
                        <span className="title">A HTML Commenter</span>
                        <p><span>April 19, 2018</span><a href="#">Reply</a></p>
                      </div>
                    </div>
                    <div className="full_definition">
                      <p>Hi, this is a comment.<br /> To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.<br /> Commenter avatars come from <a href="#">Gravatar.</a></p>
                    </div>
                  </div>
                  <div className="replybox">
                    <div className="title">
                      <h3>Leave a reply</h3>
                    </div>
                    <div className="glax_tm_contact_wrap">
                      <div className="inner_wrap">
                        <CommentForm/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="glax_tm_request_estimate_wrap">
                  <div className="image_wrap">
                    <img src="img/services/300x460.jpg" alt />
                    <div className="image" />
                  </div>
                  <div className="definition">
                    <div className="text">
                      <p>Lets get started! Contact us for a free quote on your next home improvement project.</p>
                    </div>
                    <div className="button">
                      <a href="#">Request an estimate</a>
                    </div>
                    <div className="first_shape">
                      <span className="first" />
                      <span className="second" />
                      <span className="third" />
                    </div>
                    <div className="second_shape">
                      <span className="first" />
                      <span className="second" />
                      <span className="third" />
                    </div>
                  </div>
                </div>
                <div className="glax_tm_brochures_wrap">
                  <div className="title_holder">
                    <span>Company Presentation</span>
                  </div>
                  <ul>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <img className="svg" src="img/svg/file-pdf.svg" alt />
                        </div>
                        <span className="text">Download .PDF</span>
                        <span className="arrow" />
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <img className="svg" src="img/svg/file-zip.svg" alt />
                        </div>
                        <span className="text">Download .ZIP</span>
                        <span className="arrow" />
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <img className="svg" src="img/svg/file-doc.svg" alt />
                        </div>
                        <span className="text">Download .DOC</span>
                        <span className="arrow" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /BLOG SINGLE */}
    </Layout>
  )
}
