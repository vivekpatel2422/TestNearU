import { data } from "../../firebase/index";
import React from "react";

export default class googlePopup extends React.Component {
  state = {
    loading: true,
    phu: null,
    active: null,
  };

  async componentDidMount() {
    let info1 = {
      phu: "",
      active: "",
      address: "",
      appointments: "",
      city: "",
      drive_through: "",
      location_name: "",
      operated_by: "",
      phone: "",
      phu_id: "",
      postal_code: "",
      province: "",
      walk_ins: "",
      website: "",
    };

    const ref = data.ref("PHU");
    ref.on("value", (snapshot) => {
      info1.phu = snapshot.val()[this.props.index];
      this.setState({ phu: info1.phu });
    });

    const ref1 = data.ref("active");
    ref1.on("value", (snapshot) => {
      info1.active = snapshot.val()[this.props.index];
      this.setState({ active: info1.active, loading: false });
    });

    const ref2 = data.ref("address");
    ref2.on("value", (snapshot) => {
      info1.address = snapshot.val()[this.props.index];
      this.setState({ address: info1.address, loading: false });
    });

    const ref3 = data.ref("appointments");
    ref3.on("value", (snapshot) => {
      info1.appointments = snapshot.val()[this.props.index];

      this.setState({ appointments: info1.appointments, loading: false });
    });

    const ref4 = data.ref("city");
    ref4.on("value", (snapshot) => {
      info1.city = snapshot.val()[this.props.index];

      this.setState({ city: info1.city, loading: false });
    });

    const ref5 = data.ref("drive_through");
    ref5.on("value", (snapshot) => {
      info1.drive_through = snapshot.val()[this.props.index];

      this.setState({ drive_through: info1.drive_through, loading: false });
    });

    const ref6 = data.ref("location_name");
    ref6.on("value", (snapshot) => {
      info1.location_name = snapshot.val()[this.props.index];

      this.setState({ location_name: info1.location_name, loading: false });
    });

    const ref7 = data.ref("operated_by");
    ref7.on("value", (snapshot) => {
      info1.operated_by = snapshot.val()[this.props.index];

      this.setState({ operated_by: info1.operated_by, loading: false });
    });

    const ref8 = data.ref("phone");
    ref8.on("value", (snapshot) => {
      info1.phone = snapshot.val()[this.props.index];

      this.setState({ phone: info1.phone, loading: false });
    });

    const ref9 = data.ref("postal_code");
    ref9.on("value", (snapshot) => {
      info1.postal_code = snapshot.val()[this.props.index];

      this.setState({ postal_code: info1.postal_code, loading: false });
    });

    const ref10 = data.ref("walk_ins");
    ref10.on("value", (snapshot) => {
      info1.walk_ins = snapshot.val()[this.props.index];

      this.setState({ walk_ins: info1.walk_ins, loading: false });
    });

    const ref11 = data.ref("website");
    ref11.on("value", (snapshot) => {
      info1.website = snapshot.val()[this.props.index];

      this.setState({ website: info1.website, loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.phu) {
      return <div>didn't get a value</div>;
    }

    return (
      <div>
        <div>Public Health Unit: {this.state.phu}</div>
        <div>Active: {this.state.active}</div>
        <div>Address: {this.state.address}</div>
        <div>City : {this.state.city}</div>
        <div>Postal Code: {this.state.postal_code}</div>
        <div>Appointments: {this.state.appointments}</div>
        <div>Drive Through: {this.state.drive_through}</div>
        <div>location Name: {this.state.location_name}</div>
        <div>Operated By: {this.state.operated_by}</div>
        <div>Phone: {this.state.phone}</div>
        <div>Walk ins: {this.state.walk_ins}</div>
        <div>Website: {this.state.website}</div>
      </div>
    );
  }
}
