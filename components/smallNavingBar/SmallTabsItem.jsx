"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PricingTable from "@/components/homepages/home1/PricingTable";
import Link from "next/link";

function SmallTabsItem() {
  return (
    <div className="mobileScreenTabs">
      <Tabs
        defaultActiveKey="$6k"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="$6k" title="$6k">
          <div className="PricingTableSetting">
            <PricingTable>
              <thead>
                <tr>
                  <td colSpan="3">
                    <p className="text-center">Account Size</p>
                    <p
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "22px" }}
                    >
                      $6,000
                    </p>
                    <Link href="" className="btn getPlanBtn w-100">
                      <div className="d-flex flex-column">
                        <span className="getPlanHeading">Get Plan</span>
                        <span className="getPlanFee">Fee: $59</span>
                      </div>
                    </Link>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      15% Profit Share From Challenge Phase
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">$117</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Profit Target</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">P1: 8%, P2: 5%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Maximum Daily Loss</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      Maximum Overall Loss
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      Minimum Trading Days
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5 Days</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Profit Split Upto</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">95%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">News Trading</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">95%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">First Reward</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Monthly</p>
                  </td>
                </tr>
              </tbody>
            </PricingTable>
          </div>
        </Tab>
        <Tab eventKey="$15k" title="$15k">
          <div className="PricingTableSetting">
            <PricingTable>
              <thead>
                <tr>
                  <td colSpan="3">
                    <p className="text-center">Account Size</p>
                    <p
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "22px" }}
                    >
                      $15,000
                    </p>
                    <Link href="" className="btn getPlanBtn w-100">
                      <div className="d-flex flex-column">
                        <span className="getPlanHeading">Get Plan</span>
                        <span className="getPlanFee">Fee: $59</span>
                      </div>
                    </Link>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      15% Profit Share From Challenge Phase
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">$117</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Profit Target</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">P1: 8%, P2: 5%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Maximum Daily Loss</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      Maximum Overall Loss
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      Minimum Trading Days
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5 Days</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Profit Split Upto</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">95%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">News Trading</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">95%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">First Reward</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Monthly</p>
                  </td>
                </tr>
              </tbody>
            </PricingTable>
          </div>
        </Tab>
        <Tab eventKey="$25k" title="$25k">
          <div className="PricingTableSetting">
            <PricingTable>
              <thead>
                <tr>
                  <td colSpan="3">
                    <p className="text-center">Account Size</p>
                    <p
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "22px" }}
                    >
                      $25,000
                    </p>
                    <Link href="" className="btn getPlanBtn w-100">
                      <div className="d-flex flex-column">
                        <span className="getPlanHeading">Get Plan</span>
                        <span className="getPlanFee">Fee: $59</span>
                      </div>
                    </Link>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      15% Profit Share From Challenge Phase
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">$117</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Profit Target</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">P1: 8%, P2: 5%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Maximum Daily Loss</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      Maximum Overall Loss
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      Minimum Trading Days
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5 Days</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Profit Split Upto</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">95%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">News Trading</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">95%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">First Reward</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Monthly</p>
                  </td>
                </tr>
              </tbody>
            </PricingTable>
          </div>
        </Tab>
        <Tab eventKey="$6" title="$6">
          <div className="PricingTableSetting">
            <PricingTable>
              <thead>
                <tr>
                  <td colSpan="3">
                    <p className="text-center">Account Size</p>
                    <p
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "22px" }}
                    >
                      $50,000
                    </p>
                    <Link href="" className="btn getPlanBtn w-100">
                      <div className="d-flex flex-column">
                        <span className="getPlanHeading">Get Plan</span>
                        <span className="getPlanFee">Fee: $59</span>
                      </div>
                    </Link>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      15% Profit Share From Challenge Phase
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">$117</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Profit Target</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">P1: 8%, P2: 5%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Maximum Daily Loss</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      Maximum Overall Loss
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">
                      Minimum Trading Days
                    </p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">5 Days</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Profit Split Upto</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">95%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">News Trading</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">95%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">First Reward</p>
                  </td>
                  <td>
                    <p className="tableParaTexxt p-0 m-0">Monthly</p>
                  </td>
                </tr>
              </tbody>
            </PricingTable>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default SmallTabsItem;
