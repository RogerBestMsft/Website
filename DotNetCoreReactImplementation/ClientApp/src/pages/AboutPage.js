import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import styles from "./AboutPage.module.css";

import { PageHeading } from "../components/PageHeading";
import { ProfileSection } from "../components/ProfileSection";

// Temporary data to test looks of profiles to be replaced
const placeholder1 =
  "https://s3.amazonaws.com/uifaces/faces/twitter/cdavis565/128.jpg";

const placeholder2 =
  "https://s3.amazonaws.com/uifaces/faces/twitter/brenmurrell/128.jpg";
const placeholder3 =
  "https://s3.amazonaws.com/uifaces/faces/twitter/tweetubhai/128.jpg";

const leaders = [
  {
    name: "leader",
    image: placeholder1,
    profile: "/leader",
    description:
      "Earum incidunt rerum minus eaque sunt voluptate aut dignissimos ipsam. Ut et et nihil voluptatum nesciunt officiis vel quia. Dolores doloribus voluptas tenetur officia magnam quo ab. Consectetur exercitationem velit tenetur quasi neque corrupti voluptatum officiis. Esse libero commodi atque laborum voluptatem qui. Deserunt et expedita molestiae eum ea.",
  },
  {
    name: "leader",
    image: placeholder1,
    profile: "/leader",
    description:
      "Earum incidunt rerum minus eaque sunt voluptate aut dignissimos ipsam. Ut et et nihil voluptatum nesciunt officiis vel quia. Dolores doloribus voluptas tenetur officia magnam quo ab. Consectetur exercitationem velit tenetur quasi neque corrupti voluptatum officiis. Esse libero commodi atque laborum voluptatem qui. Deserunt et expedita molestiae eum ea.",
  },
  {
    name: "leader",
    image: placeholder1,
    profile: "/leader",
    description:
      "Earum incidunt rerum minus eaque sunt voluptate aut dignissimos ipsam. Ut et et nihil voluptatum nesciunt officiis vel quia. Dolores doloribus voluptas tenetur officia magnam quo ab. Consectetur exercitationem velit tenetur quasi neque corrupti voluptatum officiis. Esse libero commodi atque laborum voluptatem qui. Deserunt et expedita molestiae eum ea.",
  },
  {
    name: "leader",
    image: placeholder1,
    profile: "/leader",
    description:
      "Earum incidunt rerum minus eaque sunt voluptate aut dignissimos ipsam. Ut et et nihil voluptatum nesciunt officiis vel quia. Dolores doloribus voluptas tenetur officia magnam quo ab. Consectetur exercitationem velit tenetur quasi neque corrupti voluptatum officiis. Esse libero commodi atque laborum voluptatem qui. Deserunt et expedita molestiae eum ea.",
  },
  {
    name: "leader",
    image: placeholder1,
    profile: "/leader",
    description:
      "Earum incidunt rerum minus eaque sunt voluptate aut dignissimos ipsam. Ut et et nihil voluptatum nesciunt officiis vel quia. Dolores doloribus voluptas tenetur officia magnam quo ab. Consectetur exercitationem velit tenetur quasi neque corrupti voluptatum officiis. Esse libero commodi atque laborum voluptatem qui. Deserunt et expedita molestiae eum ea.",
  },
];
const members = [
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Earum incidunt rerum minus eaque sunt voluptate aut dignissimos ipsam. Ut et et nihil voluptatum nesciunt officiis vel quia. Dolores doloribus voluptas tenetur officia magnam quo ab. Consectetur exercitationem velit tenetur quasi neque corrupti voluptatum officiis. Esse libero commodi atque laborum voluptatem qui. Deserunt et expedita molestiae eum ea.",
  },
  {
    name: "member",
    image: placeholder3,
    profile: "/leader",
    description:
      "Voluptas voluptatem et sit. Dolor dolorem omnis at vitae fugiat et ex et. Minus quod facere occaecati debitis rerum in delectus doloremque distinctio. Ut quidem quo et recusandae reiciendis et.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Aut neque ipsum. Modi perferendis odio alias officiis qui numquam quo et. Autem odio ipsam aut facilis incidunt quia.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Ipsa cumque qui. Numquam atque totam soluta earum voluptatibus dolore. Et repellendus ullam sapiente nam. Dolores at qui quo culpa quam nihil ea enim. Ipsum quis eaque qui impedit error voluptatem.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Ut alias praesentium autem eveniet quasi consequatur. Et et fuga modi dolor saepe. Possimus omnis accusamus.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Sunt omnis est corrupti quas eos fugiat error sed. Adipisci et corrupti. Eum quos tempore autem est voluptatum doloremque ut ut. Perferendis debitis consequuntur consequuntur vitae.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Ea ut fuga consectetur et. Voluptas ipsa voluptatem dolor. Nihil aut aut.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Sit consequuntur tempora sequi aperiam voluptatem reprehenderit nobis. Reprehenderit rerum consequatur consectetur commodi est id porro possimus. Cupiditate qui ut praesentium consectetur repellendus sed sunt quia sit. Magni et inventore ipsum laboriosam fugit rerum et velit aut. Repellat odio ea consectetur consectetur sunt aut sint sunt.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Exercitationem explicabo quis repellat expedita libero et. Numquam omnis aut non blanditiis nesciunt voluptatem omnis nisi expedita. Sit enim quia officiis. Autem vel voluptatem. Accusantium fuga debitis ex cum at aut omnis beatae.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Molestiae officia numquam adipisci delectus dicta quia incidunt. Quia sunt sed quia et quibusdam odit. Harum et voluptatem facilis ipsum cupiditate et. Unde blanditiis nobis minima eius.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Qui ut qui nam. Eius nihil occaecati odio ut illo similique atque voluptatem laudantium. Odio odio sequi voluptatibus.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Enim in officia velit harum voluptates nihil. Aut nihil porro consequatur error accusamus aut aliquid laboriosam. Veritatis nihil adipisci laborum neque esse ut sequi alias ea. Odio magni et occaecati sed est eum. Eligendi asperiores rerum saepe vero in aut minima.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Repellat quis omnis quod debitis et et corporis est. Corporis laudantium nam saepe recusandae labore accusantium beatae sequi voluptas. Reprehenderit impedit quam molestiae itaque dolores quam.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Et aut reiciendis deleniti rerum et id nisi eum. Placeat atque ratione. Aut illum dolorem est error quis sed assumenda voluptas. Similique optio illo voluptas est quia occaecati dolorem eos veritatis. Asperiores error iusto libero eveniet enim veniam consectetur aut explicabo. Voluptates maxime ad.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Ducimus quos dolores blanditiis vitae. Modi aut dolore. Quos omnis omnis tempore expedita rerum eaque suscipit mollitia. Officia fugiat quia consequatur labore quasi ratione libero.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Et rerum laudantium quo autem dolorem animi. Expedita quia commodi dolorem unde ea perferendis ullam rem quia. Dolorem ut quo illum. Ipsum necessitatibus alias facilis autem aut voluptatibus et. Facilis dicta et officiis sit unde tempora autem reiciendis est. Consectetur reprehenderit ipsam voluptatem doloremque sint.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Adipisci ut dolorem perferendis consequuntur consequatur dolorem veniam dolorem perferendis. Consectetur error tenetur est sint sit voluptate. Est accusantium provident debitis.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Rem et quo ea repellendus. Repellat dignissimos eos dolore fugiat. Consequatur quae nisi iusto aut accusantium. Accusamus non enim qui culpa.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Praesentium nesciunt qui atque aut delectus quia. Ea itaque ab fugiat soluta impedit repellendus corporis architecto repellendus. Numquam ut quod sed. Praesentium quod assumenda quod minima.",
  },
  {
    name: "member",
    image: placeholder2,
    profile: "/leader",
    description:
      "Qui sed quia soluta ducimus consequatur qui soluta ut. Sit accusantium dolor ullam necessitatibus. Praesentium delectus ut iste recusandae praesentium iure voluptatum cum in.",
  },
];

export const AboutPage = () => {
  const ProfileRows = ({ members }) => {
    let groupSize = 5;

    return members
      .reduce((r, member, index) => {
        // create element groups with size of groupSize, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        if (index % groupSize === 0) {
          r.push([]);
        }
        r[r.length - 1].push(member);

        return r;
      }, [])
      .map((row, index) => {
        return <ProfileRow key={index} row={row} />;
      });
  };
  const ProfileRow = ({ row }) => {
    /// Helper component for the row of profiles
    const [open, setOpen] = useState(false);
    const [member, setMember] = useState({});

    return (
      <Row>
        {row.map((member, index) => {
          return (
            <Col
              key={index}
              onClick={(e) => {
                setMember(member);
                setOpen(true);
                e.target.classList.toggle("backgroundPrimary");
              }}
            >
              <Profile
                name={member.name}
                image={member.image}
                profile={member.profile}
                eventKey={index}
              />
            </Col>
          );
        })}
        <Row className="w-100">
          <Collapse in={open} className="backgroundPrimary text-light w-100">
            <div>
              <Button
                onClick={() => setOpen(false)}
                variant="secondary"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>
              <Figure>
                <Figure.Image roundedCircle src={member.image} />
                <Figure.Caption>{member.name}</Figure.Caption>
              </Figure>
              <p>{member.description}</p>
              <Button as={Link} to={member.profile ?? "/"}>
                LinkedIn
              </Button>
            </div>
          </Collapse>
        </Row>
      </Row>
    );
  };

  return (
    <>
      <AppBar></AppBar>
      <PageHeading
        title={'Meet The People Behind CORAbot'}
        subtitle={'Project CORA’s team consists of volunteers from Microsoft as well as industry professionals '
          + 'and students from Boston University, Iowa State University, and Texas A&M. During the Microsoft '
          + 'Hackathon for COVID-19, the team originally created Project CORA to provide relief efforts. '
          + 'However, it was quickly realized the solution could be repurposed for any NGO or community cause '
          + 'that supports underrepresented communities. In preparation for the upcoming Microsoft Hack for '
          + 'Good, our team hopes to partner with nonprofit organizations directly and extend CORAbot to their '
          + 'specific cause.'}
      />
      <Container fluid as="main">
        <Row className={`${styles.titleBarRight}  h2`}>
          <span className={styles.title}>Leadership</span>
        </Row>
        <Container fluid className="justify-content-center">
          <ProfileRows members={leaders} />
        </Container>

        <Row className={`${styles.titleBarLeft}  h2`}>
          <span className={styles.title}>Core Team</span>
        </Row>
        <Container fluid className="justify-content-center">
          <ProfileRows members={members} />
        </Container>

        <ProfileSection title={'Advisors'} profiles={leaders} />
      </Container>
      <Footer></Footer>
    </>
  );
};
