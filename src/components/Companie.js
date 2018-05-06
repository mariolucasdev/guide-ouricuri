import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Companie extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(companie => (
          <li className="card box" key={companie.id}>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <Link to={`/companie/${companie.name}`}>
                      <img
                        src="http://emblemsbf.com/img/77148.jpg"
                        alt={companie.name}
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="media-content">
                <div className="content">
                  <h2 className="title is-4">{companie.name}</h2>
                  <p className="content">{companie.description}</p>
                </div>
              </div>

              <div className="media-content">
                <div className="content">
                  <ul className="contact-list">
                    {companie.contact.site ? (
                      <li>
                        <a
                          className="tag is-dark is-medium"
                          href={companie.contact.site}
                        >
                          {companie.contact.site}
                        </a>
                      </li>
                    ) : (
                      ''
                    )}

                    {companie.contact.email ? (
                      <li>
                        <span className="tag is-danger is-medium">
                          {companie.contact.email}
                        </span>
                      </li>
                    ) : (
                      ''
                    )}

                    {companie.contact.facebook ? (
                      <li>
                        <a
                          className="tag is-info is-medium"
                          href={companie.contact.facebook}
                        >
                          facebook
                        </a>
                      </li>
                    ) : (
                      ''
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
}
