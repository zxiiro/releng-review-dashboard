userdata['dfarrell07'] = {
  "identity": ids["dfarrell07"],
  "reviewCountPlus2": 2,
  "reviewCountPlus1": 1,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1515617983000,
  "lastActiveDate": 1527864802000,
  "activeDayCount": 6,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I942726a626622ee16e5b9a9366f7fe552b144314",
      "commitNumber": 10732,
      "subject": "Add OpenCI event emit job, builder",
      "owner": ids["dfarrell07"],
      "url": "https://gerrit.linuxfoundation.org/infra/10732",
      "commitMessage": "Add OpenCI event emit job, builder\n\nEarly prototype for cross-project, event-driven CI effort under OpenCI,\nbetween ODL, OPNFV and others.\n\nEmit script copied from Fatih in:\n\nhttps://git.opendaylight.org/gerrit/#/c/72096/\n\nChange-Id: I942726a626622ee16e5b9a9366f7fe552b144314\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1526930665000,
      "lastUpdatedDate": 1527864802000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["fdegir"],
        ids["yrobla"]
      ],
      "comments": [
        {
          "timestamp": 1526930665000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526930842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/"
        },
        {
          "timestamp": 1526931046000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/449"
        },
        {
          "timestamp": 1527842354000,
          "reviewer": ids["fdegir"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1527842668000,
          "reviewer": ids["yrobla"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1527864802000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\n(3 comments)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "69fc6ccbb7ac01d21452036ece81b1af121b171e",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/32/10732/1",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1526930665000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1527864802000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526931046000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1527842668000,
              "grantedBy": ids["yrobla"]
            }
          ],
          "comments": [
            {
              "file": "jjb/openci-jobs.yaml",
              "line": 48,
              "reviewer": ids["zxiiro"],
              "message": "Since global-jjb needs to support GitHub as well we need to also have a GitHub based template. Look at one of the maven verify jobs and copy the GitHub section they all mostly look quite similar.",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 1,
              "reviewer": ids["fdegir"],
              "message": "this script does not emit the event but just generates the event body for the prototype.\n\nYolanda has been working on a utility to emit events which can be incorporated into this script.\n\nBtw, we are looking into message spec since we got some info from CNCF guys which we will use while working on the message spec.",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 11,
              "reviewer": ids["zxiiro"],
              "message": "We should probably `set -e` too",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 26,
              "reviewer": ids["yrobla"],
              "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
              "patchSetTimestamp": 1526930665000
            }
          ],
          "sizeInsertions": 125,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Id8426b838d0c64eaf2807307ec4dbf5cb0a8017d",
      "commitNumber": 9575,
      "subject": "WIP: Testing fixes for rtd-verify",
      "owner": ids["dfarrell07"],
      "url": "https://gerrit.linuxfoundation.org/infra/9575",
      "commitMessage": "WIP: Testing fixes for rtd-verify\n\nDOC_DIR is used in rtd-verify.sh in a mv as if it is terminated at root.\n\nmv \"$DOC_DIR\" archives/\n\nWhich fails with the current \"docs/_build/html\" default.\n\nThis doesn\u0027t happen for the docs project, but does happen for packaging\nand netvirt.\n\nDocs will be generated by tox in dir relative to absolte path TOX_DIR.\nBase DOCS_DIR on TOX_DIR to get properly-rooted path.\n\nTesting adding TOX dir on both ends for now, should only do one.\n\nChange-Id: Id8426b838d0c64eaf2807307ec4dbf5cb0a8017d\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1521782124000,
      "lastUpdatedDate": 1523475922000,
      "isOpen": false,
      "status": "ABANDONED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["dfarrell07"]
      ],
      "comments": [
        {
          "timestamp": 1521782124000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1521782458000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/297/"
        },
        {
          "timestamp": 1521782801000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/297/ : FAILURE\n\nThe commit message shortlog (1st line in commit message) ins\"t in the imperative mood. This is usually because it contains an -ing word, e.g., Adding, which is advised against. Instead try saying something like \"Add foo unit test\". ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/297/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/297"
        },
        {
          "timestamp": 1523470909000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nOne of the problems is projects can modify where their docs are built. For example:\n\n* odl/docs: {toxinidir}/docs/_build/html\n* int/pkg: {envtmpdir}/html\n\nSince our build scripts assume the tox environment named \"docs\" though perhaps we can parse for\n\n [testenv:docs]\n commands \u003d sphinx-build ... path/to/docs/\n\nLet me see if I can find something that let\u0027s use do this..."
        },
        {
          "timestamp": 1523471405000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\nAfter doing a bit of research I think if we wanted to do this programmatically it would be a big effort to support all of tox\u0027s variables\n\n{envtmpdir}, {toxinidir}, etc...\n\nConsidering that the doc-dir is a configurable path we should have the projects enter it in their job configuration."
        },
        {
          "timestamp": 1523472217000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nThe fix on the ODL side:\n\nhttps://jenkins.opendaylight.org/sandbox/job/packaging-rtd-verify-fluorine/1/"
        },
        {
          "timestamp": 1523472235000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nWoops meant to link to https://git.opendaylight.org/gerrit/70801"
        },
        {
          "timestamp": 1523475917000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\nAwesome Thanh, thanks for figuring out a better solution to this. :)"
        },
        {
          "timestamp": 1523475922000,
          "reviewer": ids["dfarrell07"],
          "message": "Abandoned"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a52db46d71c5e9fba0a91f369104e697ef50d6e7",
          "parents": [
            "f75d04ed3780933fb82b31c596f579e482dd6d06"
          ],
          "ref": "refs/changes/75/9575/1",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1521782124000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523471405000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1521782801000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Id97f3ae4635dc7a685a0d1e58effd24ee312c703",
      "commitNumber": 8347,
      "subject": "Don\u0027t try to pushd into dir that doesn\u0027t exist",
      "owner": ids["dfarrell07"],
      "url": "https://gerrit.linuxfoundation.org/infra/8347",
      "commitMessage": "Don\u0027t try to pushd into dir that doesn\u0027t exist\n\nJust download packer into WORKSPACE vs bothering with a tmp packer dir.\n\nChange-Id: Id97f3ae4635dc7a685a0d1e58effd24ee312c703\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1515617983000,
      "lastUpdatedDate": 1515620236000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1515617983000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1515618077000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/140/"
        },
        {
          "timestamp": 1515618263000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\nUsing the macro that installs packer like this\n\nhttps://git.opendaylight.org/gerrit/#/c/60435/15/jjb/packaging/packaging.yaml@292\n\nis failing with\n\n20:45:29 packer.io command not is available. Installing packer ...\n20:45:29 /tmp/jenkins8024552679583525907.sh: line 27: pushd: packer: No such file or directory\n\nhttps://jenkins.opendaylight.org/sandbox/job/packaging-build-packer-virtualbox-master/4/console"
        },
        {
          "timestamp": 1515618384000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/140/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/140/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/140"
        },
        {
          "timestamp": 1515619115000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1515619476000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/141/"
        },
        {
          "timestamp": 1515619711000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1515619732000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/141/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/141/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/141"
        },
        {
          "timestamp": 1515619737000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1515619868000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/142/"
        },
        {
          "timestamp": 1515620199000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/142/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/142"
        },
        {
          "timestamp": 1515620236000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "dec89e7273ae3003de5fb6bfa70bb98594fc87ac",
          "parents": [
            "064e85f576fecfaea7ec24ad6ebc10c32a1317d1"
          ],
          "ref": "refs/changes/47/8347/1",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1515617983000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515618384000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "90c3c066a01c398347666f841f6d62ddd65e9d54",
          "parents": [
            "064e85f576fecfaea7ec24ad6ebc10c32a1317d1"
          ],
          "ref": "refs/changes/47/8347/2",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1515619115000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515619732000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 19,
          "sizeDeletions": -19
        },
        {
          "number": 3,
          "revision": "333d661d90ff0291664d49ea5de5866a0ed8b94d",
          "parents": [
            "064e85f576fecfaea7ec24ad6ebc10c32a1317d1"
          ],
          "ref": "refs/changes/47/8347/3",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1515619711000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1515619737000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1515620236000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515620199000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 57,
          "sizeDeletions": -57
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ie4f893108c7624dd9162ae66466e4f808e54bcb3",
      "commitNumber": 4613,
      "subject": "Add github funcs to lftools",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/4613",
      "commitMessage": "Add github funcs to lftools\n\n[RELENG-85] Add a way to create a hook,create branch protections,\nand create a repository.\n\nChange-Id: Ie4f893108c7624dd9162ae66466e4f808e54bcb3\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1493394081000,
      "lastUpdatedDate": 1504795884000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["agrimberg"],
        ids["jeremyphelps"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1493394081000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1493400338000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1493400479000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1493403093000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1493404612000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 4: Commit message was updated."
        },
        {
          "timestamp": 1496764816000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1496764993000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 6: Commit message was updated."
        },
        {
          "timestamp": 1496928872000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1496929036000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/5/"
        },
        {
          "timestamp": 1496929172000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2:\n\n(2 comments)"
        },
        {
          "timestamp": 1496929505000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/5/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/5/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/5"
        },
        {
          "timestamp": 1496932780000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(4 comments)"
        },
        {
          "timestamp": 1496933404000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1496933474000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/6/"
        },
        {
          "timestamp": 1496933900000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/6/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/6/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/6"
        },
        {
          "timestamp": 1496940192000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 9."
        },
        {
          "timestamp": 1496940250000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/7/"
        },
        {
          "timestamp": 1496940630000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/7/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/7/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/7"
        },
        {
          "timestamp": 1496943878000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1496943929000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/8/"
        },
        {
          "timestamp": 1496944337000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/8/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/8/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/8"
        },
        {
          "timestamp": 1496946453000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 11."
        },
        {
          "timestamp": 1496946507000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/9/"
        },
        {
          "timestamp": 1496946980000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/9/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/9/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/9"
        },
        {
          "timestamp": 1496949003000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 12."
        },
        {
          "timestamp": 1496949054000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 12:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/10/"
        },
        {
          "timestamp": 1496949412000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 12: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/10/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/10/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/10"
        },
        {
          "timestamp": 1496949587000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 13."
        },
        {
          "timestamp": 1496949595000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/11/"
        },
        {
          "timestamp": 1496949950000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/11/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/11/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/11"
        },
        {
          "timestamp": 1496955352000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 14."
        },
        {
          "timestamp": 1496955402000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/12/"
        },
        {
          "timestamp": 1496955558000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 15."
        },
        {
          "timestamp": 1496955588000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/12/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/12/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/12"
        },
        {
          "timestamp": 1496955602000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/13/"
        },
        {
          "timestamp": 1496955944000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/13/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/13/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/13"
        },
        {
          "timestamp": 1497992055000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 16."
        },
        {
          "timestamp": 1497992099000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/73/"
        },
        {
          "timestamp": 1497992433000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/73/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/73/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/73"
        },
        {
          "timestamp": 1498580145000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 17."
        },
        {
          "timestamp": 1498580267000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/83/"
        },
        {
          "timestamp": 1498580637000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/83/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/83/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/83"
        },
        {
          "timestamp": 1498581938000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 17: Code-Review-1\n\n(22 comments)\n\nI really dislike the config/settings configuration option names. It doesn\u0027t give me a sense of what the difference between them are."
        },
        {
          "timestamp": 1498582730000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 18: Patch Set 17 was rebased."
        },
        {
          "timestamp": 1498582889000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/84/"
        },
        {
          "timestamp": 1498583233000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/84/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/84/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/84"
        },
        {
          "timestamp": 1498583400000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 19: Patch Set 18 was rebased."
        },
        {
          "timestamp": 1498583568000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/85/"
        },
        {
          "timestamp": 1498584055000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/85/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/85/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/85"
        },
        {
          "timestamp": 1498594009000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 20."
        },
        {
          "timestamp": 1498594074000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/86/"
        },
        {
          "timestamp": 1498594270000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 21."
        },
        {
          "timestamp": 1498594282000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/86/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/86/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/86"
        },
        {
          "timestamp": 1498594315000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/87/"
        },
        {
          "timestamp": 1498594656000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/87/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/87/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/87"
        },
        {
          "timestamp": 1498678320000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 22."
        },
        {
          "timestamp": 1498678328000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/88/"
        },
        {
          "timestamp": 1498678670000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/88/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/88/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/88"
        },
        {
          "timestamp": 1498678919000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 23."
        },
        {
          "timestamp": 1498678970000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/89/"
        },
        {
          "timestamp": 1498679318000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/89/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/89/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/89"
        },
        {
          "timestamp": 1498680581000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 24."
        },
        {
          "timestamp": 1498680629000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/91/"
        },
        {
          "timestamp": 1498680960000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/91/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/91"
        },
        {
          "timestamp": 1498766899000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 25."
        },
        {
          "timestamp": 1498766948000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/93/"
        },
        {
          "timestamp": 1498767302000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/93/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/93/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/93"
        },
        {
          "timestamp": 1500582022000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 26."
        },
        {
          "timestamp": 1500582076000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/146/"
        },
        {
          "timestamp": 1500582456000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/146/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/146/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/146"
        },
        {
          "timestamp": 1500653543000,
          "reviewer": ids["jeremyphelps"],
          "message": "Assignee added: Daniel Farrell \u003cdfarrell07@gmail.com\u003e"
        },
        {
          "timestamp": 1500653596000,
          "reviewer": ids["agrimberg"],
          "message": "Assignee deleted: Daniel Farrell \u003cdfarrell07@gmail.com\u003e"
        },
        {
          "timestamp": 1500662718000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 27."
        },
        {
          "timestamp": 1500662769000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 27:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/152/"
        },
        {
          "timestamp": 1500663166000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 27: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/152/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/152/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/152"
        },
        {
          "timestamp": 1502320237000,
          "reviewer": ids["askb"],
          "message": "Patch Set 27:\n\n(1 comment)"
        },
        {
          "timestamp": 1502320515000,
          "reviewer": ids["askb"],
          "message": "Patch Set 27:\n\n(2 comments)"
        },
        {
          "timestamp": 1504667056000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 28."
        },
        {
          "timestamp": 1504667109000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/261/"
        },
        {
          "timestamp": 1504667588000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/261/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/261/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/261"
        },
        {
          "timestamp": 1504704578000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 29."
        },
        {
          "timestamp": 1504704712000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 29:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/265/"
        },
        {
          "timestamp": 1504705195000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 29: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/265/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/265/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/265"
        },
        {
          "timestamp": 1504706155000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 29: Code-Review-1\n\nWhat is this build/lib directory that seems to be copying the entire project into a subdirectory?"
        },
        {
          "timestamp": 1504711210000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 30."
        },
        {
          "timestamp": 1504711923000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/268/"
        },
        {
          "timestamp": 1504712440000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/268/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/268/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/268"
        },
        {
          "timestamp": 1504714788000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 31."
        },
        {
          "timestamp": 1504714899000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/269/"
        },
        {
          "timestamp": 1504715454000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/269/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/269/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/269"
        },
        {
          "timestamp": 1504716415000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 32."
        },
        {
          "timestamp": 1504716494000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 32:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/270/"
        },
        {
          "timestamp": 1504716987000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 32: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/270/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/270/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/270"
        },
        {
          "timestamp": 1504795407000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 33."
        },
        {
          "timestamp": 1504795461000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 33:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/272/"
        },
        {
          "timestamp": 1504795884000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 33: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/272/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/272/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/272"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f6bc458a70268c2ef411c428bb2892079fead889",
          "parents": [
            "c3bf292e964551563b4675a1b39a27d26da66703"
          ],
          "ref": "refs/changes/13/4613/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1493394081000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 37,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "2d1849cb12f39dbbe8f5c77d30db16a6528cbed5",
          "parents": [
            "c3bf292e964551563b4675a1b39a27d26da66703"
          ],
          "ref": "refs/changes/13/4613/2",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1493400338000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1493400479000,
              "grantedBy": ids["agrimberg"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["agrimberg"],
              "message": "Please add the LF JIRA issue you\u0027re working against",
              "patchSetTimestamp": 1493400338000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1493400338000
            }
          ],
          "sizeInsertions": 67,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "9101fc5a0b0da197ca32ab7e36b802ff90a4b3ae",
          "parents": [
            "c3bf292e964551563b4675a1b39a27d26da66703"
          ],
          "ref": "refs/changes/13/4613/3",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1493403093000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [
            {
              "file": "lftools/utils/__init__.py",
              "line": 1,
              "reviewer": ids["jeremyphelps"],
              "message": "This probably isn\u0027t a good idea.  Putting the __init__.py file here in tests.  Reading some conflicting stuff.",
              "patchSetTimestamp": 1493403093000
            },
            {
              "file": "lftools/utils/__init__.py",
              "line": 1,
              "reviewer": ids["zxiiro"],
              "message": "Python modules need __init__.py so that python knows it\u0027s a module.",
              "patchSetTimestamp": 1493403093000
            }
          ],
          "sizeInsertions": 67,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "b6aeab39ad6a52a275f4125ea58f6dca92c26ab7",
          "parents": [
            "c3bf292e964551563b4675a1b39a27d26da66703"
          ],
          "ref": "refs/changes/13/4613/4",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1493404612000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "NO_CODE_CHANGE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 67,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "f3c0ecde64c8995c47342ef7c364dfcf9857ef8f",
          "parents": [
            "70e852f95a3faa0d5a87a467932c2d64384e0623"
          ],
          "ref": "refs/changes/13/4613/5",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496764816000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 126,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "79d627b62763c3044118ae1be1b152397c9d14b7",
          "parents": [
            "70e852f95a3faa0d5a87a467932c2d64384e0623"
          ],
          "ref": "refs/changes/13/4613/6",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496764993000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "NO_CODE_CHANGE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 126,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "1ff25ffe05e321ea0578c0246d726ed353933cb4",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/7",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496928872000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1496932780000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496929505000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/utils/github.py",
              "line": 0,
              "reviewer": ids["zxiiro"],
              "message": "Is utils used?\n\nanyway I would put this stuff inside of the github folder. It\u0027s confusing if we split put our libraries into so many separate folders.",
              "patchSetTimestamp": 1496928872000
            },
            {
              "file": "requirements.txt",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "Alphabetical order please.",
              "patchSetTimestamp": 1496928872000
            },
            {
              "file": "test_requirements.txt",
              "line": 0,
              "reviewer": ids["zxiiro"],
              "message": "This file isn\u0027t needed. we already pull in pytest via tox.ini.",
              "patchSetTimestamp": 1496928872000
            }
          ],
          "sizeInsertions": 155,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "4170e059a2053e161e6d10972cdfeed454450ee2",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/8",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496933404000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496933900000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 142,
          "sizeDeletions": -1
        },
        {
          "number": 9,
          "revision": "10619a588f803eea6e9a36d9b4d6c227ebd2659a",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/9",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496940192000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496940630000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 155,
          "sizeDeletions": -1
        },
        {
          "number": 10,
          "revision": "fa7ef27a6b7de352e72421687dc8090bc49360d0",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/10",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496943878000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496944337000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 157,
          "sizeDeletions": -1
        },
        {
          "number": 11,
          "revision": "100e7686126a035bfdc93717a73c112dcab5ceeb",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/11",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496946453000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496946980000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 161,
          "sizeDeletions": -1
        },
        {
          "number": 12,
          "revision": "e93eeaa5e69529cc98fb044a22b0b8991f3894c8",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/12",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496949003000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496949412000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 168,
          "sizeDeletions": -2
        },
        {
          "number": 13,
          "revision": "be31e60d1124cad4ce213e72e4c2558159098b2c",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/13",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496949587000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496949950000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 148,
          "sizeDeletions": -2
        },
        {
          "number": 14,
          "revision": "838f42043f067f08b4a1b5ef28928fab6fd6cfde",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/14",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496955352000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496955588000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 199,
          "sizeDeletions": -2
        },
        {
          "number": 15,
          "revision": "6276dc1079070a45220a994f4b60e6fc318b31bc",
          "parents": [
            "55290817d07ee49c41ea934492bf6bae5fdc2935"
          ],
          "ref": "refs/changes/13/4613/15",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1496955558000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1496955944000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 199,
          "sizeDeletions": -2
        },
        {
          "number": 16,
          "revision": "1cd9baa8efc044d2997ab681b703ea830ec3c4d8",
          "parents": [
            "032dbbae86190f6e7937db103513eb5dff6bb95d"
          ],
          "ref": "refs/changes/13/4613/16",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1497992055000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1497992433000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 348,
          "sizeDeletions": -1
        },
        {
          "number": 17,
          "revision": "37535ee71ba10f7a16c442dce4c585f3c5782541",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/17",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498580145000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1498581938000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1498580637000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 7,
              "reviewer": ids["zxiiro"],
              "message": "If you can shorten the description below it would make a better subject line imo as \"Add github funcs\" is pretty generic and doesn\u0027t explain to shortlog what that means.",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["zxiiro"],
              "message": "Move this to the footer as:\n\n Issue: RELENG-85",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["zxiiro"],
              "message": "Need a space here.",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "etc/github/branch-protection.example.yaml",
              "line": 3,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "etc/github/branch-protection.example.yaml",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "What\u0027s it mean to be JJB Verified? Is everything going to be called JJB Verify?\n\nMy original thought was for the CI Jobs they are JJB verify because they are verifying JJB code but if this is going to be applied generally to any job then does this make sense here? for example a Maven build is not verifying JJB but Maven code.",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "etc/github/settings.example.yaml",
              "line": 3,
              "reviewer": ids["zxiiro"],
              "message": "credentials",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "etc/github/webhook.example.yaml",
              "line": 3,
              "reviewer": ids["zxiiro"],
              "message": "WebHook",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "etc/github/webhook.example.yaml",
              "line": 3,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "etc/github/webhook.example.yaml",
              "line": 5,
              "reviewer": ids["zxiiro"],
              "message": "Sounds like name is a confined set of options. If so this should be worded as Name must be one of [\u0027web\u0027, \u0027other\u0027, \u0027possible\u0027, \u0027values\u0027]",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "etc/github/webhook.example.yaml",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "It\u0027s good practice to put 2 spaces before the start of a comment to make it clear that this is a comment line.",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "etc/github/webhook.example.yaml",
              "line": 22,
              "reviewer": ids["zxiiro"],
              "message": "Same here.",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "lftools/cli/github.py",
              "line": 21,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "lftools/cli/github.py",
              "line": 29,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "lftools/cli/github.py",
              "line": 31,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "lftools/cli/github.py",
              "line": 34,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "lftools/github/__init__.py",
              "line": 11,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "lftools/github/cmd.py",
              "line": 2,
              "reviewer": ids["zxiiro"],
              "message": "Doc strings need to go BELOW the license header.",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "lftools/github/cmd.py",
              "line": 48,
              "reviewer": ids["zxiiro"],
              "message": "Do what stuff?\n\nI have learned nothing from this comment.",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "tests/fixtures/github/branch-protection.example.yaml",
              "line": 3,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "tests/fixtures/github/settings.example.yaml",
              "line": 3,
              "reviewer": ids["zxiiro"],
              "message": "credentials",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "tests/fixtures/github/settings.example.yaml",
              "line": 3,
              "reviewer": ids["zxiiro"],
              "message": "GitHub",
              "patchSetTimestamp": 1498580145000
            },
            {
              "file": "tests/fixtures/github/webhook.example.yaml",
              "line": 5,
              "reviewer": ids["zxiiro"],
              "message": "If name has specific contraints on what it can be set to then list them.",
              "patchSetTimestamp": 1498580145000
            }
          ],
          "sizeInsertions": 350,
          "sizeDeletions": -1
        },
        {
          "number": 18,
          "revision": "5c1bd4a8f5b66d71ba4a6142a53edd55209c014d",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/18",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498582730000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "NO_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1498581938000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1498583233000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 350,
          "sizeDeletions": -1
        },
        {
          "number": 19,
          "revision": "35e6228f2425cef792e3c0a23030fceea3efd1cc",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/19",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498583400000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "NO_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1498581938000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1498584055000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 350,
          "sizeDeletions": -1
        },
        {
          "number": 20,
          "revision": "89b23087f6761d10230d361dd126a0be63e2483c",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/20",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498594009000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1498594282000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 370,
          "sizeDeletions": -1
        },
        {
          "number": 21,
          "revision": "c62f5e2f7e35a5601ab2e3b745c5cd5689d3e8b3",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/21",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498594270000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1498594656000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 370,
          "sizeDeletions": -1
        },
        {
          "number": 22,
          "revision": "fb3d03f999531e8d1072bd6e87451fd811e1e7a9",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/22",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498678320000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1498678670000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 388,
          "sizeDeletions": -1
        },
        {
          "number": 23,
          "revision": "4f8fef5da82334f710f046e38be29fd0c77115df",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/23",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498678919000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1498679318000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 390,
          "sizeDeletions": -1
        },
        {
          "number": 24,
          "revision": "9084ef6b164589c9139d39eb528f9336fff71a2a",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/24",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498680581000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1498680960000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 386,
          "sizeDeletions": -1
        },
        {
          "number": 25,
          "revision": "321cf0d3e7c64d1011b116fe7d571dfee520397e",
          "parents": [
            "4da2d409ff0863f776f5680f31cb6cc1aeed3be2"
          ],
          "ref": "refs/changes/13/4613/25",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1498766899000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1498767302000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 404,
          "sizeDeletions": -1
        },
        {
          "number": 26,
          "revision": "d3c40c3e2499a4080511a9a5e3dfd38b1d703a67",
          "parents": [
            "ef9427497ce246d321582b3feb8841f09e30bca6"
          ],
          "ref": "refs/changes/13/4613/26",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1500582022000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1500582456000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 427,
          "sizeDeletions": -1
        },
        {
          "number": 27,
          "revision": "7135c1508860fc6b8663d8f2153e28eb9f3350a2",
          "parents": [
            "ef9427497ce246d321582b3feb8841f09e30bca6"
          ],
          "ref": "refs/changes/13/4613/27",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1500662718000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1500663166000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "etc/github/branch-protection.example.yaml",
              "line": 3,
              "reviewer": ids["askb"],
              "message": "I would suggest adding some docs string explaining what this config does and some of the config options.",
              "patchSetTimestamp": 1500662718000
            },
            {
              "file": "etc/github/webhook.example.yaml",
              "line": 30,
              "reviewer": ids["askb"],
              "message": "I would suggest adding some docs string explaining what this config does and some of the config options.",
              "patchSetTimestamp": 1500662718000
            },
            {
              "file": "lftools/github/cmd.py",
              "line": 91,
              "reviewer": ids["askb"],
              "message": "ws",
              "patchSetTimestamp": 1500662718000
            }
          ],
          "sizeInsertions": 416,
          "sizeDeletions": -1
        },
        {
          "number": 28,
          "revision": "0de5dc9f272be0cbc6c3e379972d005f0ee499c1",
          "parents": [
            "bafa0da8e1c31d0bec1a210a568772db1e0095bc"
          ],
          "ref": "refs/changes/13/4613/28",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1504667056000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504667588000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2278,
          "sizeDeletions": -1
        },
        {
          "number": 29,
          "revision": "d6b6ace4f016760b002705cba09b69158b7ffdbe",
          "parents": [
            "bafa0da8e1c31d0bec1a210a568772db1e0095bc"
          ],
          "ref": "refs/changes/13/4613/29",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1504704578000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1504706155000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504705195000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2353,
          "sizeDeletions": -1
        },
        {
          "number": 30,
          "revision": "7fa85186eae7d7db147af954bb04fb02af99f35f",
          "parents": [
            "bafa0da8e1c31d0bec1a210a568772db1e0095bc"
          ],
          "ref": "refs/changes/13/4613/30",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1504711210000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504712440000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2373,
          "sizeDeletions": -1
        },
        {
          "number": 31,
          "revision": "5c7b137941d79e510d6bd1597a5c1b404b8e11c3",
          "parents": [
            "bafa0da8e1c31d0bec1a210a568772db1e0095bc"
          ],
          "ref": "refs/changes/13/4613/31",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1504714788000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504715454000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2375,
          "sizeDeletions": -1
        },
        {
          "number": 32,
          "revision": "91a633c189bd22fe6c8fc6af853168234cc5731b",
          "parents": [
            "bafa0da8e1c31d0bec1a210a568772db1e0095bc"
          ],
          "ref": "refs/changes/13/4613/32",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1504716415000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504716987000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2376,
          "sizeDeletions": -1
        },
        {
          "number": 33,
          "revision": "0b1c1e4c57db16f36dc80fe33e7b1b34c362a07b",
          "parents": [
            "bafa0da8e1c31d0bec1a210a568772db1e0095bc"
          ],
          "ref": "refs/changes/13/4613/33",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1504795407000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504795884000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 659,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I2229d66f637bd5aab203a3bbf12aa1e677a471a1",
      "commitNumber": 12122,
      "subject": "Add Jenkins Sandbox Cleanup job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12122",
      "commitMessage": "Add Jenkins Sandbox Cleanup job\n\nThis cleanup job runs weekly on Saturdays to clear out Sandbox\njobs and views from the system.\n\nThe benefit of this is that it uses the same version of JJB as\nthe other CI jobs whereas the traditional cron job we put in puppet\ndoes not often get updated to match the right version.\n\nIssue: RELENG-1118\nChange-Id: I2229d66f637bd5aab203a3bbf12aa1e677a471a1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533414562000,
      "lastUpdatedDate": 1533859346000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1533414562000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533414636000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ (1/2)"
        },
        {
          "timestamp": 1533414684000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ (2/2)"
        },
        {
          "timestamp": 1533414875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/687\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/293"
        },
        {
          "timestamp": 1533570613000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\nI\u0027m really on the fence with this change. It only solves 1/2 of the configuration problem. That of the Jenkins jobs. It does nothing for the Nexus side for clearing out the job logs that exist in the sandbox holding area which continues to have to be a cron job."
        },
        {
          "timestamp": 1533574810000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n\u003e I\u0027m really on the fence with this change. It only solves 1/2 of the\n \u003e configuration problem. That of the Jenkins jobs. It does nothing\n \u003e for the Nexus side for clearing out the job logs that exist in the\n \u003e sandbox holding area which continues to have to be a cron job.\n\nTo be fair the Nexus side is a completely separate step. Even if we ignore this job. It required modifying 2 separate puppet files. One for Jenkins and one for Nexus. Irrespective of this patch it was still a 2 step process previously too. This reduces the steps to 1 but does bring up a point that we need to document the Nexus part in our infrastructure docs."
        },
        {
          "timestamp": 1533651337000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1533651424000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ (1/2)"
        },
        {
          "timestamp": 1533651444000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ (2/2)"
        },
        {
          "timestamp": 1533651590000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/294\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/689"
        },
        {
          "timestamp": 1533851963000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859329000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859346000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7ca8d2677a2b1c8738d676feaa776240e878dc9c",
          "parents": [
            "78f0bd978eeadea71fdc31e16de4cc4b8e769b48"
          ],
          "ref": "refs/changes/22/12122/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533414562000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533414875000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 105,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1eda455b5c9e28a98441ddd46a61035dd5f60fe6",
          "parents": [
            "8a5ed774fd2f4109ff9fe6da4359263dc3a1ab29"
          ],
          "ref": "refs/changes/22/12122/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533651337000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533851963000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533859329000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533859346000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533651590000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 97,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I38aaf2ff3d655d44e757c863f83a0b2cb811ab41",
      "commitNumber": 10460,
      "subject": "Bug Fix: Replace -type f with -xtype f",
      "owner": ids["mardim"],
      "url": "https://gerrit.linuxfoundation.org/infra/10460",
      "commitMessage": "Bug Fix: Replace -type f with -xtype f\n\nThe -type f parameter cannot recognize symbolic link files\nso the replacement with the -xtype f parameter solve this problem\n\nhttps://jira.opendaylight.org/browse/INTPAK-162\n\nChange-Id: I38aaf2ff3d655d44e757c863f83a0b2cb811ab41\nSigned-off-by: Dimitrios Markou \u003cmardim@intracom-telecom.com\u003e\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1525524127000,
      "lastUpdatedDate": 1525565219000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"],
        ids["jwagantall"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1525524127000,
          "reviewer": ids["mardim"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525524366000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/"
        },
        {
          "timestamp": 1525524541000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/420"
        },
        {
          "timestamp": 1525562250000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525564031000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525564201000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1525564299000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1525564503000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/"
        },
        {
          "timestamp": 1525564683000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/421"
        },
        {
          "timestamp": 1525565216000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1525565219000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4b7b95d316c0711208add009eb3061d49af44f13",
          "parents": [
            "c3150dcea8069e284ec52bf487541576a62687ab"
          ],
          "ref": "refs/changes/60/10460/1",
          "uploader": ids["mardim"],
          "createdOnDate": 1525524127000,
          "author": ids["mardim"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525564201000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525524541000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525562250000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["askb"],
              "message": "minor nit, we link ODL jira in the same way instead we should use the full link.",
              "patchSetTimestamp": 1525524127000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d3cac52899668bc9b7f1fe7fcf16203bcf86ce53",
          "parents": [
            "c3150dcea8069e284ec52bf487541576a62687ab"
          ],
          "ref": "refs/changes/60/10460/2",
          "uploader": ids["askb"],
          "createdOnDate": 1525564299000,
          "author": ids["mardim"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525565216000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525565219000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525564683000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "If54f43eb3f66d0c6b493495a82a65989fc7ed6c3",
      "commitNumber": 10397,
      "subject": "Add override for GT file-paths in Python jobs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10397",
      "commitMessage": "Add override for GT file-paths in Python jobs\n\nSome projects may have small Python sub-projects within their\nrepos. This would allow them to only trigger builds when there\nis a change in the relevant directory.\n\nChange-Id: If54f43eb3f66d0c6b493495a82a65989fc7ed6c3\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1525362547000,
      "lastUpdatedDate": 1525385719000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["shague"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1525362547000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525365384000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ (1/2)"
        },
        {
          "timestamp": 1525365413000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ (2/2)"
        },
        {
          "timestamp": 1525365779000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/405\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/146"
        },
        {
          "timestamp": 1525384770000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1525384844000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1525384880000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ (1/2)"
        },
        {
          "timestamp": 1525384915000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ (2/2)"
        },
        {
          "timestamp": 1525384941000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1\n\n(1 comment)"
        },
        {
          "timestamp": 1525385059000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/407\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/147"
        },
        {
          "timestamp": 1525385096000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1525385121000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1525385719000,
          "reviewer": ids["dfarrell07"],
          "message": "Change has been successfully merged by Daniel Farrell"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b36b320613a5aeef4d016f73e81c26802b83e0e0",
          "parents": [
            "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
          ],
          "ref": "refs/changes/97/10397/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1525362547000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1525365779000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-python-jobs.rst",
              "line": 79,
              "reviewer": ids["dfarrell07"],
              "message": "Grammar check doesn\u0027t like this, fixed 3x in next patchset",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["dfarrell07"],
              "message": "jenkins_jobs.errors.JenkinsJobsException: obj parameter missing to format {obj:gerrit_trigger_file_paths}\n\nNot sure how to fix that properly but I made it work in next patchset",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["zxiiro"],
              "message": "Thanks for fixing this. Inheritance probably wasn\u0027t coming through properly via the common anchor.",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["dfarrell07"],
              "message": "Np, merge it if you think the fix is okay Thanh",
              "patchSetTimestamp": 1525362547000
            }
          ],
          "sizeInsertions": 24,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "aa256b7a0769f6c9c9906cacb4d87f49e691622c",
          "parents": [
            "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
          ],
          "ref": "refs/changes/97/10397/2",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1525384770000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525384941000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525385059000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525385096000,
              "grantedBy": ids["dfarrell07"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525385719000,
              "grantedBy": ids["dfarrell07"]
            }
          ],
          "comments": [],
          "sizeInsertions": 26,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ifddf4463ac6afa2395be25cddf989fe05dd9fec1",
      "commitNumber": 9534,
      "subject": "Add link to release notes",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9534",
      "commitMessage": "Add link to release notes\n\nIssue: RELENG-552\nChange-Id: Ifddf4463ac6afa2395be25cddf989fe05dd9fec1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1521652284000,
      "lastUpdatedDate": 1521902752000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["askb"],
        ids["jwagantall"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1521652284000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1521652388000,
          "reviewer": ids["zxiiro"],
          "message": "Assignee added: Jessica Wagantall \u003cjwagantall@linuxfoundation.org\u003e"
        },
        {
          "timestamp": 1521652397000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/101/ (1/2)"
        },
        {
          "timestamp": 1521652430000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/296/ (2/2)"
        },
        {
          "timestamp": 1521652600000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/101/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/101\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/296/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/296"
        },
        {
          "timestamp": 1521659472000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1521779799000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1521902730000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1521902752000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "3ea6a674e095bb64a4830c4bd2bb66e155a674b2",
          "parents": [
            "f75d04ed3780933fb82b31c596f579e482dd6d06"
          ],
          "ref": "refs/changes/34/9534/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1521652284000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521902730000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1521902752000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1521652600000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521779799000,
              "grantedBy": ids["dfarrell07"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1521659472000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [],
          "sizeInsertions": 8,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I7d134950b25d469686cace2f79fd8c297727166c",
      "commitNumber": 8434,
      "subject": "Create job to manage Jenkins Global Variables",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8434",
      "commitMessage": "Create job to manage Jenkins Global Variables\n\nParses a configuration file containing variable listings in the form\n\"KEY\u003dvalue\" one per line and creates the appropriate groovy\nscript to push these environment variables to Jenkins Global Config.\n\nConfiguration file is stored in\nci-management/jenkins-config/global-vars-SILO.sh\n\n(Where silo is production | sandbox)\n\nWhile JJB provided us a way to store job configuration in a git repo\nwe have never had a good way to manage global Jenkins configuration.\nThis patch enables us to manage one aspect, Global Environment\nvariables in the ci-management repository.\n\nIssue: RELENG-753\nChange-Id: I7d134950b25d469686cace2f79fd8c297727166c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516321577000,
      "lastUpdatedDate": 1518450858000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1516321577000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1518062029000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1518066002000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1518066033000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nSuccessfully tested with https://logs.opendaylight.org/sandbox/vex-yul-odl-jenkins-2/builder-jenkins-cfg-merge/19/"
        },
        {
          "timestamp": 1518066127000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ (1/2)"
        },
        {
          "timestamp": 1518066175000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/75/ (2/2)"
        },
        {
          "timestamp": 1518066311000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/238\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/75/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/75"
        },
        {
          "timestamp": 1518066705000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1518066803000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/239/ (1/2)"
        },
        {
          "timestamp": 1518066854000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/76/ (2/2)"
        },
        {
          "timestamp": 1518066992000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/239/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/239\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/76/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/76"
        },
        {
          "timestamp": 1518145719000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1518145842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/243/ (1/2)"
        },
        {
          "timestamp": 1518145878000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/77/ (2/2)"
        },
        {
          "timestamp": 1518146056000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/243/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/243\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/77/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/77"
        },
        {
          "timestamp": 1518146172000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review-1\n\n(3 comments)"
        },
        {
          "timestamp": 1518147448000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1518147566000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/244/ (1/2)"
        },
        {
          "timestamp": 1518147613000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/78/ (2/2)"
        },
        {
          "timestamp": 1518147738000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/244/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/244\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/78/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/78"
        },
        {
          "timestamp": 1518147757000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 6: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1518148001000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1518148107000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/245/ (1/2)"
        },
        {
          "timestamp": 1518148147000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/79/ (2/2)"
        },
        {
          "timestamp": 1518148326000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/245/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/245\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/79/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/79"
        },
        {
          "timestamp": 1518182253000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 7:\n\nWill every project with a ci-management/jjb area need to gain a jenkins-config/ subdirectory for this to succeed?"
        },
        {
          "timestamp": 1518184611000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n\u003e Will every project with a ci-management/jjb area need to gain a\n \u003e jenkins-config/ subdirectory for this to succeed?\n\nYes this will cause all projects to require a jenkins-config directory with a global-vars file defined for \u0027production\u0027 and \u0027sandbox\u0027 systems. (Unless they decide to exclude the job). This provides a very visible feature for the projects though so I don\u0027t really expect folks will want to do that and LF staff will need to fill out the initial details."
        },
        {
          "timestamp": 1518184696000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1518449793000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1518449914000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1518450117000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/246/ (1/2)"
        },
        {
          "timestamp": 1518450185000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/80/ (2/2)"
        },
        {
          "timestamp": 1518450801000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/246/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/246\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/80/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/80"
        },
        {
          "timestamp": 1518450841000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+2\n\nSuccessfully tested latest patch on Sandbox.\nhttps://logs.opendaylight.org/sandbox/vex-yul-odl-jenkins-2/builder-jenkins-cfg-merge/2/\n\nGoing to merge to get this into global-jjb v0.16.0 today."
        },
        {
          "timestamp": 1518450858000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "778507859a47e2536d83ae8a709bfec21b70b3f9",
          "parents": [
            "c1873360fa7455fdb690c6235923d7eb68e30ec6"
          ],
          "ref": "refs/changes/34/8434/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516321577000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 153,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "127c4ef9f25fd72c9f8a72c3cb463082f1960376",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518062029000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 165,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "9ef0e2fcf3aa4280f6ecffbece09539ace36476f",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518066002000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1518066311000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 225,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "6eaf52ff75162bfd80d2511e13d31ab69662d3d0",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518066705000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518066992000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 227,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "9e16156cb489a8ba3fa3da8bc9c15c4ad30f23b4",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518145719000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518146172000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518146056000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": ".jjb-test/lf-ci-jobs.yaml",
              "line": 9,
              "reviewer": ids["zxiiro"],
              "message": "Not sure we need this the job should define a default.",
              "patchSetTimestamp": 1518145719000
            },
            {
              "file": ".jjb-test/lf-ci-jobs.yaml",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "same here.",
              "patchSetTimestamp": 1518145719000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 274,
              "reviewer": ids["zxiiro"],
              "message": "need a default branch defined.",
              "patchSetTimestamp": 1518145719000
            }
          ],
          "sizeInsertions": 227,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "713cd5f10d1d67d62fd8c6b28ac03b327d8c427b",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518147448000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518147757000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518147738000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "Should document that this script requires lftools to be preinstalled to /tmp/v/lftools.",
              "patchSetTimestamp": 1518147448000
            },
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 15,
              "reviewer": ids["zxiiro"],
              "message": "Don\u0027t need this line of code as this script is already assuming that this directory exists. Plus if it didn\u0027t we made not effort to actually install lftools after this...",
              "patchSetTimestamp": 1518147448000
            }
          ],
          "sizeInsertions": 257,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "3e3cae6c6a31cad29eb214112feb3d3bcdde9174",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518148001000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518184696000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518148326000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 50,
              "reviewer": ids["zxiiro"],
              "message": "Need to check if a user puts a space in the file will it be ignored or cause this to fail?\n\n\nAlso we should support comments (lines starting with #) as I suspect folks may want to add comments to the file.",
              "patchSetTimestamp": 1518148001000
            },
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 50,
              "reviewer": ids["zxiiro"],
              "message": "if [[ $var \u003d\u003d \u0027#\u0027* ]] || [ -z \"$var\" ]; then\n        continue\n    fi",
              "patchSetTimestamp": 1518148001000
            }
          ],
          "sizeInsertions": 264,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "1d1aaf33f079ee4f51dfce68e8f5592a649947ca",
          "parents": [
            "757650c835599c0aa4fe62ed99f05eab324c6f37"
          ],
          "ref": "refs/changes/34/8434/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518449914000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1518450841000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1518450858000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518450801000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 269,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I4f26c640804a0b7db1a0087cbd805b9263821326",
      "commitNumber": 6419,
      "subject": "Add job to deploy to sandbox",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/6419",
      "commitMessage": "Add job to deploy to sandbox\n\nThis job allows a contributor to leave a comment for example\n\u0027jjb-deploy builder-jjb-*\u0027 to deploy a job (or several jobs if wildcards\nare used) to the Jenkins Sandbox.\n\nThis allows jjb contributors to no longer have to install jjb on their\nlocal systems in order to push the job to the Jenkins Sandbox.\n\nATTN: GitHub version of the job is untested and likely does NOT work as\n      currently designed.\n\nIssue: RELENG-373\nChange-Id: I4f26c640804a0b7db1a0087cbd805b9263821326\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1504837065000,
      "lastUpdatedDate": 1505141875000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["bramwelt"],
        ids["askb"],
        ids["shague"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1504837065000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1504837147000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/376/"
        },
        {
          "timestamp": 1504837375000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/376/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/376"
        },
        {
          "timestamp": 1504838305000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1504838351000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/377/"
        },
        {
          "timestamp": 1504838577000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/377/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/377"
        },
        {
          "timestamp": 1504841783000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\nDoes this require local changes be pushed on gerrit for this to work?"
        },
        {
          "timestamp": 1504841923000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\nDoes this also deploy jobs which are relevent to the changes in question? If yes, do we want to allow that."
        },
        {
          "timestamp": 1504841992000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n\u003e Does this also deploy jobs which are _not_ relevant to the change in\n \u003e question? If yes, do we want to allow that.\n\ncorrected"
        },
        {
          "timestamp": 1504842367000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1504877499000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)\n\n\u003e Does this require local changes be pushed on gerrit for this to\n \u003e work?\n\nOnly if the jobs they want to test are being changed (or adding new jobs). Existing jobs they can use a recent patch and pass the command to trigger the deployment.\n\n\n \u003e Does this also deploy jobs which are _not_ relevant to the change in\n \u003e question? If yes, do we want to allow that.\n\nYes because otherwise if you just want to retest something in the sandbox you\u0027d have to push a patch to modify a job that might not need modifying. It\u0027s better to just leave it open. People can be specific about the jobs they want to deploy anyway because they have to pass a job name."
        },
        {
          "timestamp": 1504877799000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1504877847000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/378/"
        },
        {
          "timestamp": 1504878074000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/378/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/378/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/378"
        },
        {
          "timestamp": 1504878186000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1504878264000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/379/"
        },
        {
          "timestamp": 1504878550000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/379/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/379"
        },
        {
          "timestamp": 1504884721000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 4: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1504885539000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1504885648000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/380/"
        },
        {
          "timestamp": 1504885862000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1504885887000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/380/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/380/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/380"
        },
        {
          "timestamp": 1504885910000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/381/"
        },
        {
          "timestamp": 1504885960000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1504885983000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 6:\n\n(1 comment)"
        },
        {
          "timestamp": 1504886012000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/382/"
        },
        {
          "timestamp": 1504886018000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/381/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/381/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/381"
        },
        {
          "timestamp": 1504886034000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1504886080000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/383/"
        },
        {
          "timestamp": 1504886099000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/382/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/382/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/382"
        },
        {
          "timestamp": 1504886338000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/383/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/383"
        },
        {
          "timestamp": 1505140648000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 8: Code-Review+2"
        },
        {
          "timestamp": 1505140649000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1505141875000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 6:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "40a19947cafec3d814659d4ef6c0feab07e26a2b",
          "parents": [
            "11b2f87f626f38368e1406c38a37cde8134a5301"
          ],
          "ref": "refs/changes/19/6419/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1504837065000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1504837375000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1194,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "88f2843f58692701e1212e5b18c0dad8c1e29329",
          "parents": [
            "11b2f87f626f38368e1406c38a37cde8134a5301"
          ],
          "ref": "refs/changes/19/6419/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1504838305000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1504838577000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jjb-deploy-job.sh",
              "line": 29,
              "reviewer": ids["askb"],
              "message": "I think it would be good to limit the number of jobs users can push at once to Jenkins, such that the jobs are relevant to the files being modified. We could get a list of files which are changed with $(git log --pretty\u003d\"\" --name-only -n1) and ensure that jobs (regex) are within the same directory path.",
              "patchSetTimestamp": 1504838305000
            },
            {
              "file": "shell/jjb-deploy-job.sh",
              "line": 29,
              "reviewer": ids["zxiiro"],
              "message": "A perfectly valid use case of the sandbox is to test existing jobs. For example if something failed in production and we need to reproduce it to figure out what went wrong. No point forcing someone to have to submit a patch just to troubleshoot an existing job. This patch already limits the jobs being pushed by forcing them to pass a job name.\n\nAlthough I should add a check to ensure $JOB_NAME is not empty or just \u0027*\u0027 to be safe.",
              "patchSetTimestamp": 1504838305000
            }
          ],
          "sizeInsertions": 1204,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "d78ba7eddc153af23868f525720fffd264354c39",
          "parents": [
            "11b2f87f626f38368e1406c38a37cde8134a5301"
          ],
          "ref": "refs/changes/19/6419/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1504877799000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504878074000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1210,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "ddb978feaf6b4d69aa8772e617c30d71cdcdf277",
          "parents": [
            "11b2f87f626f38368e1406c38a37cde8134a5301"
          ],
          "ref": "refs/changes/19/6419/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1504878186000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1504884721000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1504878550000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 304,
              "reviewer": ids["agrimberg"],
              "message": "I think that this should be:\njjb-deploy (?!\\*$).+$\n\nWhich will according to my testing for java regex will do a negative lookahead to make sure that the jobs being requested aren\u0027t just * but must have at least one other character. This should be added protection to not even trigger the job by default if someone does something stupid.\n\nTested at http://www.regexplanet.com/advanced/java/index.html with the following input strings:\njjb-deploy *\njjb-deploy *-foo\njjb-deploy foo-*\njjb-deploy foo-*-bar",
              "patchSetTimestamp": 1504878186000
            }
          ],
          "sizeInsertions": 1222,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "4d71fc244bb81083b96d84f17af5bf1eaaa4cb17",
          "parents": [
            "11b2f87f626f38368e1406c38a37cde8134a5301"
          ],
          "ref": "refs/changes/19/6419/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1504885539000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504885887000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1222,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "4655917feca48e6c7163668405a0a60df413443a",
          "parents": [
            "11b2f87f626f38368e1406c38a37cde8134a5301"
          ],
          "ref": "refs/changes/19/6419/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1504885862000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504886018000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 334,
              "reviewer": ids["agrimberg"],
              "message": "Does this macro even exist yet? If it does my grep-fu is apparently failing",
              "patchSetTimestamp": 1504885862000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 334,
              "reviewer": ids["zxiiro"],
              "message": "Looks like I missed this question. Yes it does near the top of this file.",
              "patchSetTimestamp": 1504885862000
            }
          ],
          "sizeInsertions": 1222,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "7dd172ae17f08ffb5dc708e81fa189bf02de0438",
          "parents": [
            "11b2f87f626f38368e1406c38a37cde8134a5301"
          ],
          "ref": "refs/changes/19/6419/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1504885960000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1504886099000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1222,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "4d5dfa5090244aeab1b691502895467abc6e7763",
          "parents": [
            "11b2f87f626f38368e1406c38a37cde8134a5301"
          ],
          "ref": "refs/changes/19/6419/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1504886034000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1505140648000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1505140649000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1504886338000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1222,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 5,
        "approvalCount": 3,
        "commentCount": 3,
        "approvals": {
          "1": 1,
          "2": 2
        }
      }
    },
    {
      "identity": ids["jeremyphelps"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["mardim"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "If54f43eb3f66d0c6b493495a82a65989fc7ed6c3",
        "commitNumber": 10397,
        "subject": "Add override for GT file-paths in Python jobs",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/10397",
        "commitMessage": "Add override for GT file-paths in Python jobs\n\nSome projects may have small Python sub-projects within their\nrepos. This would allow them to only trigger builds when there\nis a change in the relevant directory.\n\nChange-Id: If54f43eb3f66d0c6b493495a82a65989fc7ed6c3\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
        "createdOnDate": 1525362547000,
        "lastUpdatedDate": 1525385719000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["shague"],
          ids["lf-jenkins"],
          ids["dfarrell07"],
          ids["zxiiro"]
        ],
        "comments": [
          {
            "timestamp": 1525362547000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1525365384000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ (1/2)"
          },
          {
            "timestamp": 1525365413000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ (2/2)"
          },
          {
            "timestamp": 1525365779000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/405\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/146"
          },
          {
            "timestamp": 1525384770000,
            "reviewer": ids["dfarrell07"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1525384844000,
            "reviewer": ids["dfarrell07"],
            "message": "Patch Set 1:\n\n(2 comments)"
          },
          {
            "timestamp": 1525384880000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ (1/2)"
          },
          {
            "timestamp": 1525384915000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ (2/2)"
          },
          {
            "timestamp": 1525384941000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review+1\n\n(1 comment)"
          },
          {
            "timestamp": 1525385059000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/407\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/147"
          },
          {
            "timestamp": 1525385096000,
            "reviewer": ids["dfarrell07"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1525385121000,
            "reviewer": ids["dfarrell07"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1525385719000,
            "reviewer": ids["dfarrell07"],
            "message": "Change has been successfully merged by Daniel Farrell"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "b36b320613a5aeef4d016f73e81c26802b83e0e0",
            "parents": [
              "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
            ],
            "ref": "refs/changes/97/10397/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1525362547000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1525365779000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-python-jobs.rst",
                "line": 79,
                "reviewer": ids["dfarrell07"],
                "message": "Grammar check doesn\u0027t like this, fixed 3x in next patchset",
                "patchSetTimestamp": 1525362547000
              },
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 132,
                "reviewer": ids["dfarrell07"],
                "message": "jenkins_jobs.errors.JenkinsJobsException: obj parameter missing to format {obj:gerrit_trigger_file_paths}\n\nNot sure how to fix that properly but I made it work in next patchset",
                "patchSetTimestamp": 1525362547000
              },
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 132,
                "reviewer": ids["zxiiro"],
                "message": "Thanks for fixing this. Inheritance probably wasn\u0027t coming through properly via the common anchor.",
                "patchSetTimestamp": 1525362547000
              },
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 132,
                "reviewer": ids["dfarrell07"],
                "message": "Np, merge it if you think the fix is okay Thanh",
                "patchSetTimestamp": 1525362547000
              }
            ],
            "sizeInsertions": 24,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "aa256b7a0769f6c9c9906cacb4d87f49e691622c",
            "parents": [
              "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
            ],
            "ref": "refs/changes/97/10397/2",
            "uploader": ids["dfarrell07"],
            "createdOnDate": 1525384770000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1525384941000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1525385059000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1525385096000,
                "grantedBy": ids["dfarrell07"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1525385719000,
                "grantedBy": ids["dfarrell07"]
              }
            ],
            "comments": [],
            "sizeInsertions": 26,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "docs/jjb/lf-python-jobs.rst",
          "line": 79,
          "reviewer": ids["dfarrell07"],
          "message": "Grammar check doesn\u0027t like this, fixed 3x in next patchset",
          "patchSetTimestamp": 1525362547000
        },
        {
          "file": "jjb/lf-python-jobs.yaml",
          "line": 132,
          "reviewer": ids["dfarrell07"],
          "message": "jenkins_jobs.errors.JenkinsJobsException: obj parameter missing to format {obj:gerrit_trigger_file_paths}\n\nNot sure how to fix that properly but I made it work in next patchset",
          "patchSetTimestamp": 1525362547000
        },
        {
          "file": "jjb/lf-python-jobs.yaml",
          "line": 132,
          "reviewer": ids["dfarrell07"],
          "message": "Np, merge it if you think the fix is okay Thanh",
          "patchSetTimestamp": 1525362547000
        }
      ]
    }
  ],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I942726a626622ee16e5b9a9366f7fe552b144314",
        "commitNumber": 10732,
        "subject": "Add OpenCI event emit job, builder",
        "owner": ids["dfarrell07"],
        "url": "https://gerrit.linuxfoundation.org/infra/10732",
        "commitMessage": "Add OpenCI event emit job, builder\n\nEarly prototype for cross-project, event-driven CI effort under OpenCI,\nbetween ODL, OPNFV and others.\n\nEmit script copied from Fatih in:\n\nhttps://git.opendaylight.org/gerrit/#/c/72096/\n\nChange-Id: I942726a626622ee16e5b9a9366f7fe552b144314\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
        "createdOnDate": 1526930665000,
        "lastUpdatedDate": 1527864802000,
        "isOpen": true,
        "status": "NEW",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["fdegir"],
          ids["yrobla"]
        ],
        "comments": [
          {
            "timestamp": 1526930665000,
            "reviewer": ids["dfarrell07"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1526930842000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/"
          },
          {
            "timestamp": 1526931046000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/449"
          },
          {
            "timestamp": 1527842354000,
            "reviewer": ids["fdegir"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1527842668000,
            "reviewer": ids["yrobla"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1527864802000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review-1\n\n(3 comments)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "69fc6ccbb7ac01d21452036ece81b1af121b171e",
            "parents": [
              "9b240453b91f3c4b0844ea1c593721a1c421caa2"
            ],
            "ref": "refs/changes/32/10732/1",
            "uploader": ids["dfarrell07"],
            "createdOnDate": 1526930665000,
            "author": ids["dfarrell07"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1527864802000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1526931046000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1527842668000,
                "grantedBy": ids["yrobla"]
              }
            ],
            "comments": [
              {
                "file": "jjb/openci-jobs.yaml",
                "line": 48,
                "reviewer": ids["zxiiro"],
                "message": "Since global-jjb needs to support GitHub as well we need to also have a GitHub based template. Look at one of the maven verify jobs and copy the GitHub section they all mostly look quite similar.",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 1,
                "reviewer": ids["fdegir"],
                "message": "this script does not emit the event but just generates the event body for the prototype.\n\nYolanda has been working on a utility to emit events which can be incorporated into this script.\n\nBtw, we are looking into message spec since we got some info from CNCF guys which we will use while working on the message spec.",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 11,
                "reviewer": ids["zxiiro"],
                "message": "We should probably `set -e` too",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 26,
                "reviewer": ids["yrobla"],
                "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
                "patchSetTimestamp": 1526930665000
              }
            ],
            "sizeInsertions": 125,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/openci-jobs.yaml",
          "line": 48,
          "reviewer": ids["zxiiro"],
          "message": "Since global-jjb needs to support GitHub as well we need to also have a GitHub based template. Look at one of the maven verify jobs and copy the GitHub section they all mostly look quite similar.",
          "patchSetTimestamp": 1526930665000
        },
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 1,
          "reviewer": ids["fdegir"],
          "message": "this script does not emit the event but just generates the event body for the prototype.\n\nYolanda has been working on a utility to emit events which can be incorporated into this script.\n\nBtw, we are looking into message spec since we got some info from CNCF guys which we will use while working on the message spec.",
          "patchSetTimestamp": 1526930665000
        },
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 4,
          "reviewer": ids["zxiiro"],
          "message": "2018",
          "patchSetTimestamp": 1526930665000
        },
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 11,
          "reviewer": ids["zxiiro"],
          "message": "We should probably `set -e` too",
          "patchSetTimestamp": 1526930665000
        },
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 26,
          "reviewer": ids["yrobla"],
          "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
          "patchSetTimestamp": 1526930665000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["fdegir"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 1,
        "approvals": {}
      }
    },
    {
      "identity": ids["yrobla"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 1,
        "approvals": {
          "-1": 1
        }
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 3,
        "commentCount": 3,
        "approvals": {
          "-1": 2,
          "2": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 3,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 3
    }
  },
  "averageTimeInCodeReview": 751000,
  "abandonedCommitCount": 1,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 3,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 3
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 1
};